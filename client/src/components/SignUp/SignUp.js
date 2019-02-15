import React, { Component } from 'react'

import '../../styles/signup.css'

class SignUp extends Component {
  render() {
    return (
      <div className="login">
        <h3>Login/SignUp</h3>
        <form
          onSubmit={event => {
            event.preventDefault()
            let user = event.target.userName.value
            let favTeam = event.target.teamName.value
            let password = event.target.password.value

            this.props.signUpSubmit(event, user, favTeam, password)
          }}
          id="loginForm"
        >
          <span className="userSpan">
            <label className="formLabel" htmlFor="userName">
              Username :
            </label>
            <input id="userName" type="text" name="username" />
          </span>
          <br />
          <br />
          <span className="teamSpan">
            <label
              htmlFor="teamName"
              className="formLabel"
              htmlFor="favoriteTeam"
            >
              Favorite Team :
            </label>
            <select className="selectMenu" name="teams" id="teamName">
              <option value="Atlanta Hawks">Atlanta Hawks</option>
              <option value="Boston Celtics">Boston Celtics</option>
              <option value="Brooklyn Nets">Brooklyn Nets</option>
              <option value="Charlotte Hornets">Charlotte Hornets</option>
              <option value="Chicago Bulls">Chicago Bulls</option>
              <option value="Cleveland Cavaliers">Cleveland Cavaliers</option>
              <option value="Dallas Mavericks">Dallas Mavericks</option>
              <option value="Denver Nuggets">Denver Nuggets</option>
              <option value="Detroit Pistons">Detroit Pistons</option>
              <option value="Golden State Warriors">
                Golden State Warriors
              </option>
              <option value="Houston Rockets">Houston Rockets</option>
              <option value="Indiana Pacers">Indiana Pacers</option>
              <option value="Los Angeles Clippers">Los Angeles Clippers</option>
              <option value="Los Angeles Lakers">Los Angeles Lakers</option>
              <option value="Memphis Grizzlies">Memphis Grizzlies</option>
              <option value="Miami Heat">Miami Heat</option>
              <option value="Milwaukee Bucks">Milwaukee Bucks</option>
              <option value="Minnesota Timberwolves">
                Minnesota Timberwolves
              </option>
              <option value="New Orleans Pelicans">New Orleans Pelicans</option>
              <option value="New York Knicks">New York Knicks</option>
              <option value="Oklahoma City Thunder">
                Oklahoma City Thunder
              </option>
              <option value="Orlando Magic">Orlando Magic</option>
              <option value="Philadelphia 76ers">Philadelphia 76ers</option>
              <option value="Phoenix Suns">Phoenix Suns</option>
              <option value="Portland Trail Blazers">
                Portland Trail Blazers
              </option>
              <option value="Sacramento Kings">Sacramento Kings</option>
              <option value="San Antonio Spurs">San Antonio Spurs</option>
              <option value="Toronto Raptors">Toronto Raptors</option>
              <option value="Utah Jazz">Utah Jazz</option>
              <option value="Washington Wizards">Washington Wizards</option>
            </select>
          </span>
          <br />
          <br />
          <span className="passwordSpan">
            <label
              htmlFor="loginPassword"
              className="formLabel"
              htmlFor="password"
            >
              password :
            </label>
            <input type="password" name="password" id="password" />
          </span>
        </form>
        <span className="buttonSpan">
          <button
            className="loginButton"
            type="submit"
            value="submit"
            form="loginForm"
          >
            Sign Up
          </button>
          <button className="loginButton" onClick={this.props.close}>
            Close Modal
          </button>
        </span>
      </div>
    )
  }
}

export default SignUp
