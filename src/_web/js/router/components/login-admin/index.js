import React, { Component } from 'react'
import './index.css';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            username :'',
            password :'',
        }
    }

    handleChange(event, type) {
        switch (type) {
          case 'username':
            this.setState({ username: event.target.value });
            break;
          case 'password':
            this.setState({ password: event.target.value });
            break;
          default:
            break;
        }
      }

  render() {
     const{ username, password} = this.state;
    return (
      <div className="login-form">
        <div className="login-background">
            <a>username </a>
            <input  placeholder="username"  onChange={e => this.handleChange(e, 'username')} />
            <a>password </a>
            <input  placeholder="password"  onChange={e => this.handleChange(e, 'password')} />
            <button onClick={() =>{
                if(username ==='admin' && password ==='admin'){
                    this.props.history.push('/statistical');
                }
            }}>Login </button>
        </div>
      </div>
    )
  }
}
