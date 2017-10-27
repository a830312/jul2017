import React, { Component } from 'react'
import { get as _get } from 'lodash'

class User extends Component {
  render() {
    let { data } = this.props,
        avatar = _get(data, 'picture.large', ''),
        email = _get(data, 'email', ''),
        registered = _get(data, 'registered', ''),
        firstName = _get(data, 'firstName', ''),
        lastName = _get(data, 'lastName', '')

    return (
      <div>
        <image src={avatar} />
        <div>{`${firstName} ${lastName}`}</div>
        <div>{email}</div>
        <div>{registered}</div>
      </div>
    )
  }
}

export default User