import React from 'react'
import axios from 'axios'
import Auth from '../../lib/Auth'
import LocationsForm from './LocationsForm'

class LocationsNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: { address: '' }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }


  handleChange({ target: { name, value } }) {
    const data = { ...this.state.data, [name]: value }
    this.setState({ data })
  }

  handleAddressChange({ target: { name, value } }) {
    const address = { ...this.state.data.address, [name]: value }
    const data = { ...this.state.data, address }
    this.setState({ data })
  }


  handleSubmit(e) {
    e.preventDefault()
    this.translatePostcode()
  }

  translatePostcode() {
    const { postcode } = this.state.data.address
    axios.get(`https://postcodes.io/postcodes/${postcode}`)
      .then(res => {
        const coordinates = {
          lat: res.data.result.latitude,
          lng: res.data.result.longitude
        }
        const data = { ...this.state.data, coordinates }
        this.setState({ data }, () => this.newLocation())
      })
      .catch(err => console.log(err.response))
  }

  newLocation() {
    axios.post('/api/locations', this.state.data, {
      headers: { Authorization: `Bearer ${Auth.getToken()}` }
    })
      .then(() => this.props.history.push('/map'))
      .catch(err => console.log(err.response))

  }


  render() {
    return (
      <section className="section-newform">
        <LocationsForm
          data={this.state.data}
          handleChange={this.handleChange}
          handleAddressChange={this.handleAddressChange}
          handleSubmit={this.handleSubmit}
        />
      </section>
    )
  }
}


export default LocationsNew
