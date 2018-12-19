import React from 'react'
import '../styles/card.css'

const Card = props => {
  return (
    <div className="ui card">
      <div className="image">
        <img className=" logo" src={props.logo} alt="team logo" />
      </div>
      <div className="content">
        <a className="header">{props.city}</a>
        <div className="meta">
          <span className="nickname">{props.nickname}</span>
        </div>
      </div>
    </div>
  )
}

export default Card
