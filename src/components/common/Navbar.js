import React from 'react'
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
  constructor() {
    super()

    this.state = {}
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
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
                <Link to="/register" className="button is-dark">
                  <strong>Sign up</strong>
                </Link>
                <Link to="/login" className="button is-light">
                  Log in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
