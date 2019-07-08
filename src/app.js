import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReactDOM from 'react-dom'

import Home from './components/common/Home'
import Navbar from './components/common/Navbar'
import Map from './components/Map'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Navbar />
          <Switch>
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
