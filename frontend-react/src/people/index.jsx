import React, { Component } from 'react'
import { get as _get } from 'lodash'
import User from './User'

class People extends Component {
  constructor(props) {
    super(props)
    this._fetchUsers = this._fetchUsers.bind(this)
    this._handleLoadMoreClicked = this._handleLoadMoreClicked.bind(this)
    this.state = {
      users: []
    }
  }

  _fetchUsers(results = 12) {
    let currentUsers = this.state.users
    fetch(`https://randomuser.me/api/?results=${results}`, {mode: 'cors'})
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        let results = _get(result, 'results', [])
        
        currentUsers = currentUsers.concat(results)
        console.log(results, currentUsers)
        this.setState({
          users: currentUsers
        })
      })
      .catch(function(err) {
        console.log(err)
      })
  }

  _handleLoadMoreClicked(e) {
    e.preventDefault()
    this._fetchUsers()
  }

  componentDidMount() {
    this._fetchUsers()
  }

  render() {
    let { users } = this.state

    return (
      <div>
        <div className="people">
          {
            users.map((user, i) => <User data={user} key={`user-${i}`} />)
          }
          <button onClick={this._handleLoadMoreClicked} className="people__fetch">Load More</button>
        </div>
      </div>
    )
  }
}

export default People