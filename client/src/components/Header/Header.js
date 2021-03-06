import React from 'react'
import '../../styles/header.css'
import { GoPerson } from 'react-icons/go'

const Header = props => {
  return (
    <div className="headerContainer">
      <h1 className="headerText">FingerRoll</h1>
      <button onClick={props.open} className="headerButton">
        <GoPerson className="loginIcon" />
        Sign Up
      </button>
    </div>
  )
}

export default Header
