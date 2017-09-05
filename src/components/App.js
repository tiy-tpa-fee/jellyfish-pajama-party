import React, { Component } from 'react'
import Start from './Start'
import Game from './Game'
import '../styles/screen.css'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Jellyfish Pajama Party!</h1>
        {/* <Start /> */}
        <Game />
      </div>
    )
  }
}

export default App
