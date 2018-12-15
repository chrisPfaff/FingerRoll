import React, { Component } from "react";

import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";

import "../styles/app.css";

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("/api/landing")
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ data: data });
      });
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
      );
    });
    return (
      <div>
        <Header />
        <div className="mainContainer">{teamCards}</div>
        <Footer />
      </div>
    );
  }
}

export default App;
