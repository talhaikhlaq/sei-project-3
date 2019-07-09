import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



class LocationCard extends React.Component {
  constructor() {
    super()

    this.state = { location: null }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  componentDidMount() {
    axios.get(`/api/locations/${this.props.match.params.id}`)
      .then(res => this.setState({ location: res.data }))
      .catch(err => console.log(err))
  }

  handleChange(e) {
  this.setState({ comment: { text: e.target.value }})
}

handleSubmit(e) {
  e.preventDefault()
}


  render() {
    if (!this.state.location) return null
    const { location } =  this.state
    return (
      <section className="section">
        <div className="container">
<div className="columns">
        <div className="column is-half">
    <figure className="image">
          <img src={location.image} alt={location.name} />
        </figure>
        </div>

    <div className="column is-half">
          <h1 className="title">{location.name}</h1>
          <h2 className="subtitle is-5">{location.category}</h2>
          <h3 className="subtitle is-6">{location.address.buildingNumber} {location.address.street} {location.address.postcode}</h3>
          <a href={location.website} class="subtitle is-6" target="_blank" rel="noopener noreferrer">See their website</a>


          <hr />

          <Link
            className="button is-warning"
            to={`/locations/${location._id}/edit`}
          >
            Edit
          </Link>

        </div>
        </div>
        </div>
      </section>
    )
  }
}


export default LocationCard
