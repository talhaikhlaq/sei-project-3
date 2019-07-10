import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Map from './components/map/Map'
import Profiles from './components/profile/Profiles'
import ProfileShowTrial from './components/profile/ProfileShowTrial'
import ProfileEdit from './components/profile/ProfileEdit'
import ProfileNew from './components/profile/ProfileNew'
import Register from './components/auth/Register'
import LocationCard from './components/map/LocationCard'
import LocationsEdit from './components/map/LocationsEdit'
import LocationsNew from './components/map/LocationsNew'
import Login from './components/auth/Login'
// SecureRoute to be imported and tested towards the end

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/friends/edit/:id" component={ProfileEdit} />
            <Route path="/friends/new" component={ProfileNew} />
            <Route path="/friends/:id" component={ProfileShowTrial} />
            <Route path="/friends" component={Profiles} />
            <Route path="/map" component={Map} />
            <Route path="/locations/new" component={LocationsNew} />
            <Route path="/locations/:id/edit" component={LocationsEdit} />
            <Route path="/locations/:id" component={LocationCard} />

            <Route exact path="/" component={Home} />
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
