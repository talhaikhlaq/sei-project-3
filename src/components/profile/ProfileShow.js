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
    if (this.state.profile) return null
    return (
      <div>PROFILE SHOW PLEASE</div>
    )
  }
}

export default ProfileShow
