import React from 'react'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'

import Markers from './Markers'

mapboxgl.accessToken = process.env.MAPBOX


class Map extends React.Component {
  constructor() {
    super()
    this.state = { points: null }

  }


  componentDidMount(){
    this.getLocationList()
  }

  // gst the list of countries using the restcountries API and select the name, flat and latlng.
  getLocationList() {
    axios.get('/api/locations/')
      .then(res => {
        this.setState({ points: res.data.result.postcode },() => console.log(this.state.points))
      })
      .catch(err => console.log(err))
  }



  render() {
    return (
      <main>
        <Markers
          center={this.mapCenter}
          markers={this.state.points}

        />
      </main>
    )
  }
}

export default Map
