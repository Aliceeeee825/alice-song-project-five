import React, { Component } from 'react';
import firebase from '../firebase';
import { Link } from 'react-router-dom';

import calendarLogo from '../assets/calendarLogo.svg'

const auth = firebase.auth()

class Login extends Component{
    constructor(){
        super();
        this.state = {
            user: null,
            email: '',
            password: '',
        }
    }

    //get user input and store them in the state
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    //when the user is not null, log in
    login = (e) => {
        e.preventDefault();

        const email = this.state.email;
        const password = this.state.password;
        
        //check the email and the password with firebase
        auth.signInWithEmailAndPassword(email, password).then((result) => {
            window.location.replace('/main')
        }).catch((error) => {
            alert(error.message)
        })
        
        //when the authorization changes, reset the state
        auth.onAuthStateChanged(user => {
            this.setState({
                user
            });
        })
    }

    //when the user is not null in the state, reset it to null
    logout = () => {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
                window.location.replace('/login')
            });
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });
    }
    
    render(){
        return(
            <div className="loginPage">
                <div className="loginContent">
                    <div className="loginLogo">
                        <img src={calendarLogo} alt="A calendar with a check mark inside. Icon made by Free icons from www.freeicons.io"/>
                    </div>
    
                    <form action="GET" className="loginForm" onSubmit={this.checkStatus}>
                        <h2>Welcome Back!</h2>
                        <label htmlFor="email">Emaill address</label>
                        <input type="email" id="email" name="email" onChange={this.handleChange} placeholder="sample@alice.com"></input>
    
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={this.handleChange} placeholder="abc123"></input>
    
                        <Link to="/register">Don't have an account yet? Register here!</Link>

                        {this.state.user ? <button onClick={this.login}>Log In</button> : <button onClick={this.logout}>Log Out</button>}
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
