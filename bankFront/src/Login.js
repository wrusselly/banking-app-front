import React, { Component } from 'react';

class Login extends Component {

    state={
        numberText:"",
        passwordText:""
    }

    render(){
        return(
            <div>
                Account number:<input type="text" onChange={this.numberChange}/><br/> 
                Password:<input type="text" onChange={this.passwordChange}/><br/>
                <button type='button' onClick={this.login}>login</button>
                
                
                
            </div>
        )
        }

    numberChange=(e)=>{
        this.setState({
            numberText:e.target.value
        })
    }

    passwordChange=(e)=>{
        this.setState({
            passwordText:e.target.value
        })
    }

    login=()=>{
        this.props.changeAccountNumberFunction(this.state.numberText)
    }

}
export default Login;