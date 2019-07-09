import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import ProfileForm from './ProfileForm'

class ProfileNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        hobbies: [],
        pet: [{}]
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleChangePet = this.handleChangePet.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleChangePet({ target: { name, value } }) {
    const data = JSON.parse(JSON.stringify(this.state.data))
    data.pet[0][name] = value
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/profiles', this.state.data)
      .then(() => this.props.history.push('/friends'))
      .catch(err => console.log(err.response))
  }


  render() {
    return (
      <section className="section">
        <h1> Fill in the profile to create your profile!</h1>
        <div className="container">
          <ProfileForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleChangePet={this.handleChangePet}
          />
        </div>
      </section>

    )
  }
}


export default ProfileNew
