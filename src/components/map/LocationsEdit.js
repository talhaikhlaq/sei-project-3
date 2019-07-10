import React from 'react'
import axios from 'axios'
import LocationsForm from './LocationsForm'
import Auth from '../../lib/Auth'

class LocationsEdit extends React.Component {
  constructor() {
    super()

    this.state = { data: null }
    this.handleChange = this.handleChange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
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
          ...this.state.data.address.coordinates,
          lat: res.data.result.latitude,
          lng: res.data.result.longitude
        }
        const data = { ...this.state.data, coordinates }
        this.setState({ data }, () => this.editLocation())
      })
      .catch(err => console.log(err.response))
  }

  editLocation() {
    axios.put(`/api/locations/${this.props.match.params.id}`, this.state.data)
      .then(() => this.props.history.push(`/locations/${this.props.match.params.id}`))
      .catch(err => console.log(err.response))
  }

  render() {
    if (!this.state.data) return null
    console.log(this.state.data)
    return (
      <section className="section">
        <div className="main">
          <LocationsForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleAddressChange={this.handleAddressChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default LocationsEdit
