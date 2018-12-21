import React, { Component } from 'react'

import '../styles/modal.css'
import Login from './Login'

class Modal extends Component {
  render() {
    const { closeModal } = this.props
    return (
      <div className="modalContainer">
        <Login />
        <button className="loginButton" onClick={closeModal}>
          Close Modal
        </button>
      </div>
    )
  }
}

export default Modal
