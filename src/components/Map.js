import React from 'react'

// const express = require('express')
// const app = express()
const axios = require('axios')

require('dotenv').config()
const mapbox = process.env.MAPBOX

class Map extends React.Component {
  render() {
    return (
      <div>Map</div>
    )
  }
}

export default Map
