import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Dashboard from './Components/Dashboard.js';
import Display from "./Components/Display.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      balls: 0,
      strikes: 0
    };
  }

  onHit = e => {
    this.setState({balls: 0, strikes: 0});
  }

  onStrike = e => {
    this.setState({strikes: this.state.strikes + 1});
  }

  onBall = e => {
    this.setState({balls: this.state.balls + 1});
  }

  onFoul = e => {
    this.setState({strikes: this.state.strikes += 2});
  }

  componentDidUpdate() {
    if(this.state.strikes >= 3 || this.state.balls == 3) {
      this.setState({balls: 0, strikes: 0})
      console.log("Three strikes and you're out!")
    }

  }

  render() {
    return (
      <div className="App">
          <Display balls={this.state.balls} strikes={this.state.strikes}/>
          <Dashboard onHit={this.onHit} onStrike={this.onStrike} onBall={this.onBall} onFoul={this.onFoul}/>
      </div>
    );
  }
}

export default App;
