import React, { Component } from 'react';

import calendarLogo from '../assets/9140052761536557789.svg'

class Login extends Component{
    render(){
        return(
            <div className="loginPage">
                <div className="loginContent">
                    <div className="loginLogo">
                        <img src={calendarLogo} alt="Icon made by Free icons from www.freeicons.io"/>
                    </div>
    
                    <form action="GET" className="loginForm">
                        <h2>Welcome Back!</h2>
                        <label htmlFor="email">Emaill address</label>
                        <input type="email" id="email" required></input>
    
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" required></input>
    
                        <a href="/register">Don't have an account yet? Register here!</a>
    
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login 