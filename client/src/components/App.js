import React, { Component } from 'react'

import Card from './Card'
import Header from './Header'
import Footer from './Footer'
//import Login from './Login'

import '../styles/app.css'
import Modal from './Modal'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      login: false,
      hidden: 'visable'
    }
  }
  componentDidMount() {
    fetch('/api/landing')
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({ data: data })
      })
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
        <Header open={this.loginClick} />
        <div className="mainContainer">{teamCards}</div>
        <Footer />
        {login ? (
          <Modal
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
