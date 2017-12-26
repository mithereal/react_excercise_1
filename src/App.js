import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

    state = {
        input: "jack",
        reversed: ""
    };


    usernameChangedHandeler = (event) => {

        this.setState({

            input: event.target.value,
            reversed: [... event.target.value].reverse().join('')
        })
    };

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Lesson 1 - send username input to outputs, reverse one output</h1>
        </header>
        <p className="App-intro">
            <UserInput handle={this.usernameChangedHandeler} username={this.state.input}/>
            <br />
            <UserOutput class="normal" username={this.state.input}/>
            <UserOutput class="reversed" username={this.state.reversed}/>
        </p>
      </div>
    );
  }
}

export default App;
