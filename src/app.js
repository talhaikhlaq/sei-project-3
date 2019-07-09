import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Map from './components/map/Map'
import Profiles from './components/profile/Profiles'
import ProfileShow from './components/profile/ProfileShow'
import ProfileEdit from './components/profile/ProfileEdit'
import Register from './components/auth/Register'
import LocationCard from './components/map/LocationCard'
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
            <Route path="/friends/:id" component={ProfileShow} />
            <Route path="/friends" component={Profiles} />
            <Route path="/map" component={Map} />
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
