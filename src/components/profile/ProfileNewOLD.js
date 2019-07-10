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
    this.additionalPet = this.additionalPet.bind(this)
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleChangePet({ target: { name, value } }, index) {
    const data = JSON.parse(JSON.stringify(this.state.data))
    data.pet[index][name] = value
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.post('/api/profiles', this.state.data, {
      headers: { Authorization: `${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/friends'))
      .catch(err => console.log(err.response))
  }

  additionalPet() {
    const data = { ...this.state.data, pet: [...this.state.data.pet, {} ] }
    this.setState({ data })
  }

  render() {
    return (
      <section className="section">
        <h1 className="title"> Fill in the form to create your profile!</h1>
        <div className="container">
          <ProfileForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleChangePet={this.handleChangePet}
            addPet={this.additionalPet}
          />
        </div>
      </section>

    )
  }
}


export default ProfileNew
