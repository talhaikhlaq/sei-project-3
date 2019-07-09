import React from 'react'
import axios from 'axios'
import '../../style.scss'

// need help importing font awesome for REACT

class Register extends React.Component {
  constructor() {
    super()

    this.state = { data: {}, errors: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const data = { ...this.state.data, [e.target.name]: e.target.value }
    const errors = { ...this.state.errors, [e.target.name]: '' }

    this.setState({ data: data, errors: errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log('submitting', this.state.data)

    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch(err => this.setState({ errors: err.response.data.errors }))
  }

  render() {
    if (!this.state.data) return null
    console.log(this.state)
    return (
      <main className="section">
        <section className="container">
          <form onSubmit={this.handleSubmit}>
            <h2 className="title">Register To Meet With Other Users and their Pets</h2>
            <div className="field">
              <label className="label">Username</label>
              <div className="control has-icons-left">
                <input
                  className={`input ${this.state.errors.username ? 'is-danger' : ''}`}
                  name="username"
                  placeholder="Username"
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
              {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control has-icons-left">
                <input
                  className={`input ${this.state.errors.email ? 'is-danger' : ''}`}
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
              {this.state.errors.email && <small className="help is-danger">{this.state.errors.email}</small>}
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control has-icons-left">
                <input
                  className={`input ${this.state.errors.password ? 'is-danger' : ''}`}
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
              {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>}
            </div>
            <div className="field">
              <label className="label">Password Confirmation</label>
              <div className="control has-icons-left">
                <input
                  className={`input ${this.state.errors.passwordConfirmation ? 'is-danger' : ''}`}
                  type="password"
                  name="passwordConfirmation"
                  placeholder="Password Confirmation"
                  onChange={this.handleChange}
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
              {this.state.errors.passwordConfirmation && <small className="help is-danger">{this.state.errors.passwordConfirmation}</small>}
            </div>
            <div className="field">
              <div className="control">
                <label className="checkbox">
                  <input className="checkbox-input" type="checkbox" />
                  <span className="checkbox-text">I agree to the <a href="#">terms and conditions</a></span>
                </label>
              </div>
            </div>
            <button type="submit" className="button is-info">Submit</button>
          </form>
        </section>
      </main>
    )
  }
}

export default Register
