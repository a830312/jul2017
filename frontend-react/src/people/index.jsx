import React, { Component } from 'react'
import { get as _get } from 'lodash'
import User from './User'

class People extends Component {
  constructor(props) {
    super(props)
    this._fetchUsers = this._fetchUsers.bind(this)
    this.state = {
      users: [],
      info: {}
    }
  }

  _fetchUsers(results = 12) {
    fetch(`https://randomuser.me/api/?results=${results}`, {mode: 'cors'})
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        this.setState({
          users: _get(result, 'results', []),
          info: _get(result, 'info', {})
        })
      })
      .catch(function(err) {
        console.log(err)
      })
  }

  componentDidMount() {
    this._fetchUsers()
  }

  render() {
    let { users } = this.state

    return (
      <div className="people">
        {
          users.map((user, i) => <User data={user} key={`user-${i}`} />)
        }
      </div>
    )
  }
}

export default People