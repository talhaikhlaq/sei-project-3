import React from 'react'
import axios from 'axios'

import ProfileForm from './ProfileForm'


class ProfileEdit extends React.Component {
  constructor() {
    super()

    this.state = { data: null }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    axios.get(`/api/profiles/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err.response))
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.put(`/api/profiles/${this.props.match.params.id}`, this.state.data)
      .then(() => this.props.history.push(`/friends/${this.props.match.params.id}`))
      .catch(err => console.log(err.response))
  }

  render() {
    if (!this.state.data) return null
    return (
      <section className="section-newform">
        <ProfileForm
          data={this.state.data}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </section>
    )
  }
}

export default ProfileEdit
