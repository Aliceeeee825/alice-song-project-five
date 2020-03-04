import React, { Component } from 'react';
import firebase from '../firebase'
import { Link } from 'react-router-dom';

import registerLogo from '../assets/registerLogo.svg'

const auth = firebase.auth()

class Register extends Component{
    constructor(){
        super();

        this.state = {
            user: null,
            email: '',
            password: '',
            confirmedPassword: '',
        }
    };
    // grab the user input and save them to the state
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //handle submit event
    submitRegister = (e) => {
        e.preventDefault();
        //get the user email
        const email = this.state.email;
        const password = this.state.password;
        //verify whether the confirmed password is the same as the password
        if (this.state.password !== this.state.confirmedPassword){
            alert('The confirmed password does not match the password');
        }else{
            //create the email and password in the firebase and redirect to the main page
            auth.createUserWithEmailAndPassword(email, password).then((result) => {
                window.location.replace('/main')
            }).catch((error) => {
                //error handling
                alert(error.message)
            })
    
            //update the state
            auth.onAuthStateChanged((user) => {
                this.setState({
                    user
                })
            })
        }
    }
    
    render(){
        return(
            <div className="registerPage">
                <div className="registerContent">
                    <div className="registerLogo">
                        <img src={registerLogo} alt="A calendar with a heart in the middle. Icon made by Free icons from www.freeicons.io" />
                    </div>

                    <form action="GET" className="registerForm" onSubmit={this.submitRegister}>
                        <h2>Hello Friend!</h2>
                        <label htmlFor="email">Emaill address</label>
                        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} ></input>

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}></input>

                        <label htmlFor="confirmedPassword">Confirmed Password</label>
                        <input type="password" id="confirmedPassword" name="confirmedPassword" value={this.state.confirmedPassword} onChange={this.handleChange}></input>

                        <Link to="/login">Already have an account? Sign in here!</Link>

                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register