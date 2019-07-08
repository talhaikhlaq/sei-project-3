import React from 'react'
import mapboxgl from 'mapbox-gl'
import axios from 'axios'

// const express = require('express')
// const app = express()
// const axios = require('axios')

mapboxgl.accessToken = process.env.MAPBOX
// const mapbox = process.env.MAPBOX

class Map extends React.Component {

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




//   this.getLocations()
// getLocations() {
// axios.get('http://localhost:4000/api/locations/')
//
//
//
//



export default Map
