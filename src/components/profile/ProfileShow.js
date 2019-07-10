import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

class ProfileShow extends React.Component {
  constructor() {
    super()

    this.state = { profile: null }
  }

  componentDidMount() {
    axios.get(`/api/profiles/${this.props.match.params.id}`)
      .then(res => this.setState({ profile: res.data }))
      .catch(err => console.log(err))
  }

  isOwner() {
    return Auth.isAuthenticated() && Auth.getPayload().sub === this.state.profile.user._id
  }

  render() {
    if (!this.state.profile) return null
    const { profile } = this.state
    return (
      <main className="main-show">
        <div className="profile-show">
          <div className="profile-text">
            <div className="profile-heading">
              <h2 id="names">{profile.firstName} & {profile.pet[0].petName}</h2>
            </div>
            <div className="profile-body">
              <p className="about-p">About {profile.firstName} <br/> Age: {profile.ownerAge} <br/> Occupation: {profile.ownerOccupation}</p>
              <p className="about-p">About {profile.pet[0].petName} <br/>
              Age: {profile.pet[0].petAge} <br/>
              Species: {profile.pet[0].petSpecies} <br/>
              Hobbies: {profile.pet[0].hobbies} <br/>
              About Me: {profile.pet[0].aboutMe}
              </p>
            </div>
            {this.isOwner() && <Link
              className="button edit-button"
              to={`/friends/edit/${profile._id}`}
            >
            Edit Profile
            </Link>}
          </div>

          <div className="profile-pictures">
            <div
              className="profile-picture"
              style={{
                backgroundImage: `url(${profile.image})`
              }}
            />
            <div
              className="profile-picture"
              style={{
                backgroundImage: `url(${profile.pet[0].image})`
              }}
            />
          </div>

        </div>

      </main>

    )
  }
}

export default ProfileShow
