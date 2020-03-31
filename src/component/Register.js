import React, { Component } from 'react';
import firebase from '../firebase'
import { Link, Redirect } from 'react-router-dom';
import Swal from 'sweetalert2'

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
            redirect: false,
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
            Swal.fire({
                title: 'Error!',
                text: 'The confirmed password does not match the password',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }else{
            //create the email and password in the firebase and redirect to the main page
            auth.createUserWithEmailAndPassword(email, password).then((result) => {
                // enable redirection to login when succesfully registered
                this.setState({
                    redirect: true,
                })
            }).catch((error) => {
                //error handling
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    
            //update the state
            auth.onAuthStateChanged((user) => {
                this.setState({
                    user
                })
            })
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login'></Redirect>
        } else {
            return <Redirect to='/register'></Redirect>
        }
    }
    
    render(){
        return(
            <div className="registerPage">
                {this.renderRedirect()}
                <div className="registerContent">
                    <div className="registerLogo">
                        <img src={registerLogo} alt="A calendar with a heart in the middle. Icon made by Free icons from www.freeicons.io" />
                    </div>

                    {/* form starts here */}
                    <form action="GET" className="registerForm" onSubmit={this.submitRegister}>
                        <h2>Hello Friend!</h2>
                        <label htmlFor="email">Emaill address</label>
                        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required></input>

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} required></input>

                        <label htmlFor="confirmedPassword">Confirmed Password</label>
                        <input type="password" id="confirmedPassword" name="confirmedPassword" value={this.state.confirmedPassword} onChange={this.handleChange} required></input>

                        <Link to="/login">Already have an account? Sign in here!</Link>

                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register