import React from 'react'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'

import Markers from './Markers'

mapboxgl.accessToken = process.env.MAPBOX


class Map extends React.Component {

  componentDidMount(){
    this.getLocationList()
  }

  // gst the list of countries using the restcountries API and select the name, flat and latlng.
  getLocationList() {
    axios.get('/api/locations/')

      .then(res => console.log(res))
      .catch(err => console.log(err))
  }


  render() {
    return (
      <main>
        <Markers
          center={this.mapCenter}
        />
      </main>
    )
  }
}

export default Map
