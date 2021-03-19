import React, { Component } from 'react'
import './App.css'

import Sidebar from './sidebar/sidebar'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="grid-container">
          <Sidebar class="grid-sidebar" />
          <div class="header">
            <p>
              <strong>Ops Suite</strong>
            </p>
          </div>
          <div class="content" />
        </div>
      </div>
    )
  }
}

export default App
