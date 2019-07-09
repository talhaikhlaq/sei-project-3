import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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

  render() {

    if (!this.state.profile) return null
    if (this.state.profile) return null
    const { profile } = this.state
    return (
      <main className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <h2 className="title">{profile.ownerName}</h2>
              <hr />
              <figure className="image">
                <img src={profile.image} alt={profile.ownerName} />
              </figure>
              <hr />
          <h2 className="title">{profile.ownerName}</h2>
          <hr />
          <div className="columns">
            <div className="column is-half">
              <figure className="image">
                <img src={profile.image} alt={profile.ownerName} />
              </figure>
            </div>
            <div className="column is-half">
              <h4 className="title is-4">Age</h4>
              <p>{profile.ownerAge}</p>
              <hr />
              <h4 className="title is-4">Occupation</h4>
              <p>{profile.ownerOccupation}</p>
              <hr />
            </div>
            <div className="column is-half">
              <h2 className="title">Pet Name: {profile.pet[0].petName} </h2>
              <hr />
              <figure className="image">
                <img src={profile.pet[0].image} alt={profile.pet[0].petName} />
              </figure>
              <hr />
                <h4 className="title is-4">Species</h4>
                <p>{profile.pet[0].petSpecies}</p>
                <hr />
                <h4 className="title is-4">Hobbies</h4>
                <p>{profile.pet[0].hobbies}</p>
                <hr />
                <h4 className="title is-4">About Me</h4>
                <p>{profile.pet[0].aboutMe}</p>
            </div>
          </div>
        </div>
      </main>

              <h4 className="title is-4">Pet</h4>
              <p>{profile.pronouns}</p>
              <hr />
              <h4 className="title is-4">Looking For: </h4>
              <p>{profile.lookingFor}</p>
              <hr />
              <h4 className="title is-4">Hobbies</h4>
              <p>{profile.pet[0].hobbies}</p>
              <hr />
              <h4 className="title is-4">About Me</h4>
              <p>{profile.pet[0].aboutMe}</p>
            </div>
          </div>
        </div>
      </main>

    )
  }
}

export default ProfileShow
