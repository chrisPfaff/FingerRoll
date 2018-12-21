import React, { Component } from 'react'

import '../styles/modal.css'
import Login from './Login'

class Modal extends Component {
  render() {
    const { close } = this.props
    return (
      <div className="modalContainer">
        <Login close={close} />
      </div>
    )
  }
}

export default Modal
