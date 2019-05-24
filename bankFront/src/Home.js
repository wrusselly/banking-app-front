import React, { Component } from 'react';
import MyFunds from './MyFunds';
import SendFunds from './SendFunds';
class Home extends Component {
    state={

    }


    render(){
        return(
            <div>
                <button type='button' onClick={this.logout}>logout</button>
                <a>account number:{this.props.upstate.accountNumber}</a><br/>
                <a>balance: {this.props.upstate.balance}</a>
                <MyFunds accountNum={this.props.upstate.accountNumber} changeBalanceFunction={this.changeBalance}/>
                <SendFunds accountNum={this.props.upstate.accountNumber} changeBalanceFunction={this.changeBalance}/>
            </div>
        )
    }

    changeBalance=(acountNum,change)=>{

    }

    logout=()=>{
        this.props.changeAccountNumberFunction1(0);
    }


}
export default Home;