import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'
import 'bulma'
import './style.scss'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Map from './components/Map'
import Profiles from './components/Profiles'
import Register from './components/auth/Register'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/friends" component={Profiles} />
            <Route path="/map" component={Map} />
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
