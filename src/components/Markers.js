import React from 'react'
import mapboxgl from 'mapbox-gl'



mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN
class Markers extends React.Component {
  constructor() {
    super()
    this.markers = []
  }
  // applying custom style to the map
  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapDiv,
      style: 'mapbox://styles/gaebar/cjx3dxidn01941comlfwaysve',
      center: this.props.center,
      zoom: 1
    })




  render() {
    return (

      <div className="map" ref={el => this.mapDiv = el}/>

    )
  }
}

export default Markers
