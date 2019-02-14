import React, { Component } from 'react'

import '../../styles/modal.css'
import Login from '../Login'

class Modal extends Component {
  render() {
    const { close, login } = this.props
    return (
      <div className="modalContainer">
        <Login loginSubmit={login} close={close} />
      </div>
    )
  }
}

export default Modal
