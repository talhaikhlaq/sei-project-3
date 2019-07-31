import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'

// Scrolling Homepage imports *****************************
// import { HashRouter as Router } from 'react-router-dom'
import './scrolling.css'
import FullPage from './components/scrollingComponents/FullPage'

// ******************************************************

// import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Map from './components/map/Map'
import Profiles from './components/profile/Profiles'
import ProfileShow from './components/profile/ProfileShow'
import ProfileEdit from './components/profile/ProfileEdit'
import ProfileNew from './components/profile/ProfileNew'
import Register from './components/auth/Register'
import LocationCard from './components/map/LocationCard'
import LocationsEdit from './components/map/LocationsEdit'
import LocationsNew from './components/map/LocationsNew'
import Login from './components/auth/Login'
import MessageApp from './components/messages/MessageApp'
import AboutUs from './components/common/AboutUs'
import SecureRoute from './components/common/SecureRoute'
// SecureRoute to be imported and tested towards the end

class App extends React.Component {
  constructor() {
    super()

    this.state = { navFontColor: '#36B3D4' }

    this.setNavFontColor = this.setNavFontColor.bind(this)
  }

  setNavFontColor(color) {
    this.setState({ navFontColor: color })
  }


  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar fontColor={this.state.navFontColor} setNavFontColor={(color) => this.setNavFontColor(color)} />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/friends/edit/:id" component={ProfileEdit} />
            <Route path="/friends/new" component={ProfileNew} />
            <Route path="/friends/:id" component={ProfileShow} />
            <Route path="/friends" component={Profiles} />
            <Route path="/map" component={Map} />
            <Route path="/locations/new" component={LocationsNew} />
            <Route path="/locations/:id/edit" component={LocationsEdit} />
            <Route path="/locations/:id" component={LocationCard} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/msg" component={MessageApp} />
            <Route exact path="/" render={(props) => <FullPage {...props} setNavFontColor={(color) => this.setNavFontColor(color)} />} />
          </Switch>
        </main>
      </BrowserRouter>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
