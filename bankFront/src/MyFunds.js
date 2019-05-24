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
                <button typr='button' onChange={this.minFunds}>min</button>
            </div>
        )
    }
}
export default MyFunds;