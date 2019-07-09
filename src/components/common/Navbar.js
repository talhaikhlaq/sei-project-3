import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Auth from '../../lib/Auth'

class Navbar extends React.Component {
  constructor() {
    super()

    this.state = {}
    this.toggleNavbar = this.toggleNavbar.bind(this)
    this.logout = this.logout.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  logout() {
    Auth.logout()
    this.props.history.push('/')
  }

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }


  render() {
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item pet-meet">🐾 Pet Meet</Link>

          <a role="button" className={`navbar-burger ${this.state.navbarOpen ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" onClick={this.toggleNavbar}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu ${this.state.navbarOpen ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link to="/map" className="navbar-item">Map</Link>

            <Link to="/friends" className="navbar-item">Friends</Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link is-arrowless">
                More
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  Messaging
                </a>
                <a className="navbar-item">
                  Reviews & Ratings
                </a>
                <a className="navbar-item">
                  About Us
                </a>
                <hr className="navbar-divider"/>
                <a className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!Auth.isAuthenticated() && <Link to="/register" className="button sign-up">
                  <strong>Sign up</strong>
                </Link>}
                {!Auth.isAuthenticated() && <Link to="/login" className="button log-in">
                  Log in
                </Link>}
                {Auth.isAuthenticated() && <a className="navbar-item" onClick={this.logout}>Logout</a>}
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
