import React, { Component } from 'react'

import Card from './Card'
import Header from './Header'
import Footer from './Footer'
//import Login from './Login'

import '../styles/app.css'

class App extends Component {
  state = {
    data: [],
    login: false
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
  render() {
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
        <Header open={this.state.login} />
        <div className="mainContainer">{teamCards}</div>
        <Footer />
      </div>
    )
  }
}

export default App
