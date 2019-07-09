import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import NewLocationForm from './NewLocationForm'

class LocationsNew extends React.Component {
  constructor() {
    super()

    this.state = { data: {} }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() {
    axios.get(`/api/locations/${this.props.match.params.id}`)
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log(err.response))
  }

  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }



  handleSubmit(e) {
    e.preventDefault()

    // make axios request to API to turn postcode into coordinates
    // add coordinates to this.state.data
    // then do the rest

    axios.post('/api/locations', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/locations'))
      .catch(err => console.log(err.response))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <NewLocationForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>

      </section>
    )
  }
}


export default LocationsNew
