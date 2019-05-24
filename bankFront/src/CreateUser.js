import React, { Component } from 'react';

class CreateUser extends Component{

    state={
        usernameText:"",
        passwordText:""
    }

    render(){
        return(
            <div>
                username<input type='text' onChange={this.changeUsernameText}/><br/>
                passoword<input type='text' onChange={this.changePasswordText}/><br/>
                <button type='button' onClick={this.createUser}>create user</button>
            </div>
        )
    }

    changeUsernameText=(e)=>{
        this.setState({
            usernameText:e.target.value
        })
    }

    changePasswordText=(e)=>{
        this.setState({
            passwordText:e.target.value
        })
    }

    createUser=()=>{
        let username=this.state.usernameText;
        let password=this.state.passwordText
    }

}

export default CreateUser;