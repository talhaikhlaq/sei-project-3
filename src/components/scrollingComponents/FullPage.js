import React from 'react'
import { Pager } from 'react-bootstrap'

import ReactPageScroller from './ReactPageScroller'
import Home from '../common/Home'
import Map from '../map/Map'
import Register from '../auth/Register'
import Login from '../auth/Login'
import '../../scrolling.css'


class FullPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = { currentPage: 1 }
    this._pageScroller = null
    this.pageOnChange = this.pageOnChange.bind(this)
  }

  goToPage(eventKey) {
    this._pageScroller.goToPage(eventKey)
  }

  pageOnChange(number) {
    this.setState({ currentPage: number })
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

    return (
      <React.Fragment>
        <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
          <Home/>
          <Map goToPage={this.goToPage}/>
          <Register goToPage={this.goToPage}/>
          <Login goToPage={this.goToPage}/>
        </ReactPageScroller>
      </React.Fragment>

    )
  }
}

export default FullPage

// const pagesNumbers = this.getPagesNumbers()
// <Pager className="pagination-additional-class" bsSize="large">
// {pagesNumbers}
// </Pager>
