import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Start from './Start'
import Game from './Game'
import '../styles/screen.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Jellyfish Pajama Party!</h1>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/games/:id" component={Game} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
