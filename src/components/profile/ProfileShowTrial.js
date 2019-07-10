import React, { Fragment } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Auth from '../../lib/Auth'

class ProfileShowTrial extends React.Component {
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
      <main className="section">
        <h2 className="title">{profile.ownerName}</h2>
        <figure className="image">
          <img src={profile.image} alt={profile.ownerName} />
        </figure>
        <h4 className="title is-4">Age</h4>
        <p>{profile.ownerAge}</p>
        <h4 className="title is-4">Occupation</h4>
        <p>{profile.ownerOccupation}</p>
        <h2 className="title">Pet Name: {profile.pet[0].petName} </h2>
        <figure className="image">
          <img src={profile.pet[0].image} alt={profile.pet[0].petName} />
        </figure>
        <h4 className="title is-4">Age</h4>
        <p>{profile.pet[0].petAge}</p>
        <h4 className="title is-4">Species</h4>
        <p>{profile.pet[0].petSpecies}</p>
        <h4 className="title is-4">Hobbies</h4>
        <p>{profile.pet[0].hobbies}</p>
        <h4 className="title is-4">About Me</h4>
        <p>{profile.pet[0].aboutMe}</p>

        {this.isOwner() && <Link
          className="button"
          to={`/friends/edit/${profile._id}`}
        >
          Edit Profile
        </Link>}

      </main>

    )
  }
}

export default ProfileShowTrial
