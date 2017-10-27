import React, { Component } from 'react'
import People from './people'
import './styles.scss'

class App extends Component {
  render() {
    return (
      <div className="container">
        <People />
      </div>
    )
  }
}

export default App