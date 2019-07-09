import React from 'react'
import axios from 'axios'
import LocationsForm from './LocationsForm'
// import Auth from '../../lib/Auth'

class LocationsEdit extends React.Component {
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

    axios.put(`/api/locations/${this.props.match.params.id}`, this.state.data)
      .then(() => this.props.history.push(`/locations/${this.props.match.params.id}`))
      .catch(err => console.log(err.response))
  }

  render() {
    return (
      <section className="section">
        <div className="main">
          <LocationsForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </section>
    )
  }
}

export default LocationsEdit
