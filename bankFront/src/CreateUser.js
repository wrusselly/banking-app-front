import React, { Component } from 'react';

class CreateUser extends Component{

    state={
        nameText:"",
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
}

export default CreateUser;