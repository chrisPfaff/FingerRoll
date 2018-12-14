import React, { Component } from "react";

class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    fetch("/api/data")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.data[0]);
        this.setState({ data: data.data[0] });
      });
  }
  render() {
    return (
      <div>
        <p>{this.state.data.name}</p>
        <p>{this.state.data.team}</p>
      </div>
    );
  }
}

export default App;
