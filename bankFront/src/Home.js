import React, { Component } from 'react';
import MyFunds from './MyFunds';
import SendFunds from './SendFunds';
class Home extends Component {
    state={

    }


    render(){
        return(
            <div>
                <a>account number:{this.props.upstate.accountNumber}</a><br/>
                <a>balance: {this.props.upstate.balance}</a>
                <MyFunds changeBalanceFunction={this.changeBalance}/>
                <SendFunds changeBalanceFunction={this.changeBalance}/>
            </div>
        )
    }

    changeBalance=(acountNum,change)=>{

    }


}
export default Home;