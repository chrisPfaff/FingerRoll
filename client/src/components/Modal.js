import React, { Component } from 'react'

import Login from './Login'

class Modal extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { closeModal } = this.props
    return (
      <div className="ModalContainer">
        <Login />
        <button className="loginButton" onClick={closeModal}>
          Close Modal
        </button>
      </div>
    )
  }
}

export default Modal
