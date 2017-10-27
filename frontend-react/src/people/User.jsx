import React, { Component } from 'react'
import { get as _get } from 'lodash'
import './user.scss'

class User extends Component {
  render() {
    let { data } = this.props,
        avatar = _get(data, 'picture.large', ''),
        email = _get(data, 'email', ''),
        registered = _get(data, 'registered', ''),
        firstName = _get(data, 'firstName', ''),
        lastName = _get(data, 'lastName', '')

    return (
      <div className="user">
        <div className="user__wrapper">
          <div className="user__avatar" style={{backgroundImage: `url('${avatar}')`}} />
          <div className="user__name">{`${firstName} ${lastName}`}</div>
          <div className="user__email">{email}</div>
          <div className="user__join">{registered}</div>
        </div>
      </div>
    )
  }
}

export default User