import React, { Component } from 'react';

class SendFunds extends Component{
    state={
        numInput:0,
        idInput:0
    }

    render(){
        return(
            <div>
                <a>Account Number:</a>
                <input type='text' onChange={this.changeIDInput}/><br/>
                <input type="text" onChange={this.changeNumInput}/>
                <button type="button" onChange={this.sendFunds}>send</button>
            </div>
        )
    }

    sendFunds=()=>{
        this.props.changeBalanceFunction(this.props.accountNum,-this.state.numInput)
        this.props.changeBalanceFunction(this.state.idInput,this.state.numInput)
    }

    changeIDInput=(e)=>{
        this.setState({
            idInput:e.target.value
        })
        
    }

    changeNumInput=(e)=>{
        this.setState({
            numInput:e.target.value
        })
    }

    sendFunds=()=>{

    }
}
export default SendFunds;