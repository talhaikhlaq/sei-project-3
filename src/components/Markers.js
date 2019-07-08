import React from 'react'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'


mapboxgl.accessToken = process.env.MAPBOX

mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN
class Markers extends React.Component {
  constructor() {
    super()
    this.markers = []
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/mapbox/streets-v10',
      zoom: 10,
      center: [-0.1, 51.5074]
    })

  }




  render() {
    return (

      <div className="map" ref={el => this.mapDiv = el}/>

    )
  }
}

export default Markers
