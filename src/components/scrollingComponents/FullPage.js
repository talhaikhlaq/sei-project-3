import React from 'react'
import { Pager } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import ReactPageScroller from './ReactPageScroller'
import Home from '../common/Home'
import Map from '../map/Map'
import Register from '../auth/Register'
import Login from '../auth/Login'
import '../../scrolling.css'
import Auth from '../../lib/Auth'
import Profiles from '../profile/Profiles'



class FullPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { currentPage: 1 }
    this._pageScroller = null
    this.pageOnChange = this.pageOnChange.bind(this)
  }

  componentDidMount() {
    this.setFontColor()
  }
  
  goToPage(eventKey) {
    this._pageScroller.goToPage(eventKey)
  }

  pageOnChange(number) {
    this.setState({ currentPage: number }, () => this.setFontColor())
  }

  setFontColor() {
    let color
    const { currentPage } = this.state
    switch (currentPage) {
      case 1:
        color = '#FFFFFF'
        break
      case 2:
        color = '#696969'
        break
      default:
        color = '#36B3D4'
    }
    this.props.setNavFontColor(color)
  }

  getPagesNumbers() {

    const pageNumbers = []

    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(
        <Pager.Item key={i} eventKey={i - 1} onSelect={this.goToPage}>{i}</Pager.Item>
      )
    }
    return [...pageNumbers]
  }

  render() {
    const userLoggedIn = Auth.isAuthenticated()
    if (userLoggedIn) {
      return (
        <React.Fragment>
          <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
            <Home/>
            <Map goToPage={this.goToPage}/>

          </ReactPageScroller>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
            <Home/>
            <Map goToPage={this.goToPage}/>
            <Link to="/register"><Register goToPage={this.goToPage}/></Link>
            <Link to="/login"><Login goToPage={this.goToPage}/></Link>
          </ReactPageScroller>
        </React.Fragment>
      )
    }

  }
}

export default FullPage

// const pagesNumbers = this.getPagesNumbers()
// <Pager className="pagination-additional-class" bsSize="large">
// {pagesNumbers}
// </Pager>
