import React, { Component } from 'react'

import '../../styles/modal.css'
import SignUp from '../SignUp/SignUp'

class Modal extends Component {
  render() {
    const { close, signUp } = this.props
    return (
      <div className="modalContainer">
        <SignUp signUpSubmit={signUp} close={close} />
      </div>
    )
  }
}

export default Modal
