import React from 'react'
import '../styles/header.css'
import '../styles/button.css'
import { GoPerson } from 'react-icons/go'

const Header = props => {
  return (
    <div className="headerContainer">
      <h1 className="headerText">FingerRoll</h1>
      <button onClick={props.open} className="loginButton">
        <GoPerson className="loginIcon" />
        Login/Signup
      </button>
    </div>
  )
}

export default Header
