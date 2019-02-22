import React, { Component } from 'react'

import Card from './Card'
import Header from './Header'
import Footer from './Footer'
//import Login from './Login'
import Modal from './Modal'
import Loading from './Loading'

import '../styles/app.css'
import createUser from '../utils/utils'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      login: false,
      hidden: 'visable',
      loading: false
    }
  }
  componentDidMount() {
    fetch('/api/landing')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setTimeout(() => {
          this.setState({ data: data, loading: true })
        }, 2000)
      })
  }

  handleSignUpSubmit = (event, login, favTeam, passWord) => {
    createUser({ login, favTeam, passWord })
  }

  loginClick = () => {
    this.setState({ login: !this.state.login })
  }

  render() {
    const { login } = this.state
    const teamCards = this.state.data.map(item => {
      return (
        <Card
          fullName={item.fullName}
          city={item.city}
          nickname={item.nickname}
          logo={item.logo}
        />
      )
    })
    return (
      <div>
        {this.state.loading === false ? (
          <Loading />
        ) : (
          <div>
            <Header open={this.loginClick} />
            <div className="mainContainer">{teamCards}</div>
            <Footer />
          </div>
        )}
        {login ? (
          <Modal
            signUp={this.handleSignUpSubmit}
            close={this.loginClick}
            style={{ visability: this.state.hidden }}
          />
        ) : (
          ''
        )}
      </div>
    )
  }
}

export default App
