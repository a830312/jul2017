import React, { Component } from 'react'
import { get as _get } from 'lodash'
import moment from 'moment'
import './user.scss'

class User extends Component {
  render() {
    let { data } = this.props,
        avatar = _get(data, 'picture.large', ''),
        email = _get(data, 'email', ''),
        registered = _get(data, 'registered', ''),
        name = _get(data, 'name', ''),
        firstName = _get(name, 'first', ''),
        lastName = _get(name, 'last', ''),
        join = registered ? moment(registered, 'YYYY-MM-DD HH:mm:ss').format("ddd, DD MMM YYYY kk:mm:ss") : ''

    return (
      <div className="user">
        <div className="user__wrapper">
          <div className="user__avatar" style={{backgroundImage: `url('${avatar}')`}} />
          <div className="user__name">{`${firstName} ${lastName}`}</div>
          <div className="user__email">{email}</div>
          <div className="user__join">{`${join} GMT`}</div>
        </div>
      </div>
    )
  }
}

export default User