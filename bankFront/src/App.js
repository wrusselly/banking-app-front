import React, { Component } from 'react';
import Login from './Login.js'
import Home from './Home.js'
import './App.css';
import CreateUser from './CreateUser.js';
import { request } from 'https';
class App extends Component{
  state={
    accountNumber:0,
    balance:0,
    address:"localhost"
  }

  render(){
    let loggedin=this.state.accountNumber!==0;
  return (
    <div className="App">
      <Login getBalanceFunction={this.getBalance} changeAccountNumberFunction={this.changeAccountNumber} />
      <CreateUser/>
      <Home changeAccountNumberFunction1={this.changeAccountNumber1} upstate={this.state}/>
    </div>
  );
}

changeAccountNumber=(num)=>{
  this.setState({
    accountNumber:num
  })
  this.getBalance(num)
}

changeAccountNumber1=(num)=>{
  this.setState({
    accountNumber:num
  })
}


getBalance=(num)=>{
  let balance=0;
  let accountNumber=num;
  let url="http://localhost:9090/api/v1/accounts/"+accountNumber
  let request = new XMLHttpRequest();
  request.open('GET', url);
  request.responseType = 'json';
  request.setRequestHeader("content-Type","application/json");
  request.onload=()=>{
    console.log(num);
    balance=request.response;
    this.setState({
      balance:balance
    })
  }
  request.send();

}

}

export default App;
