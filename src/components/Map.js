import React from 'react'
import mapboxgl from 'mapbox-gl'

// const express = require('express')
// const app = express()
const axios = require('axios')

mapboxgl.accessToken = process.env.MAPBOX
// const mapbox = process.env.MAPBOX

class Map extends React.Component {
render() {
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/gaebar/cjx3dxidn01941comlfwaysve',

      zoom: 1
    })
  }


}



}

export default Map
