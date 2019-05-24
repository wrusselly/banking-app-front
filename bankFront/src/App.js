import React, { Component } from 'react';
import Login from './Login.js'
import Home from './Home.js'
import './App.css';
import CreateUser from './CreateUser.js';
class App extends Component{
  state={
    accountNumber:0,
    balance:0
  }

  render(){
  return (
    <div className="App">
      <Login/>
      <CreateUser/>
      <Home upstate={this.state}/>
    </div>
  );
}
}

export default App;
