import React from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'



class LocationCard extends React.Component {
  constructor() {
    super()

    this.state = { location: null }

  }

  componentDidMount() {
      axios.get(`/api/locations/ ${this.props.match.params.id}`)
        .then(res => this.setState({ location: res.data }))
        .catch(err => console.log(err))
    }



  render() {
    if (!this.state.location) return null
    const { location } =  this.state
    return (
      <section className="section">
        <div className="container">

          <h2 className="title">{location.name}</h2>
          <hr />

        </div>
      </section>
    )
  }
}


export default LocationCard
