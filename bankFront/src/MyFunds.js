import React, { Component } from 'react';

class MyFunds extends Component{
    state={
        numInput:0
    }

    render(){
        return(
            <div>
                <input type="text" onChange={this.changeNumInput}/>
                <button type="button" onChange={this.addFunds}>add</button>
                <button type='button' onChange={this.minFunds}>min</button>
            </div>
        )
    }


    addFunds=()=>{
        this.props.changeBalanceFunction(this.props.accountNum,this.state.numInput)
    }

    minFunds=()=>{
        this.props.changeBalanceFunction(this.props.accountNum,-this.state.numInput)
    }

    changeNumInput=(e)=>[
        this.setState({
            numInput:e.target.value
        })
    ]
}
export default MyFunds;