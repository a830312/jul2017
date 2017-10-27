import React, { Component } from 'react'
import People from './people'
import Header from './header'
import './styles.scss'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <People />
        </div>
      </div>
    )
  }
}

export default App