import React, { Component } from 'react';
import firebase from '../firebase';
import { Link, Redirect } from 'react-router-dom';
import Swal from 'sweetalert2'

import calendarLogo from '../assets/calendarLogo.svg'

const auth = firebase.auth()

class Login extends Component{
    constructor(){
        super();
        this.state = {
            user: null,
            email: '',
            password: '',
            redirect: false
        }
    }

    //get user input and store them in the state
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    //check the email and password with firebase
    checkStatus = (email, password) => {
        //when the user have provide email and/or password
        if(email === '' || password === ''){
            Swal.fire({
                title: 'Error!',
                text: 'Please put your email and password here',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }else{
            auth.signInWithEmailAndPassword(email, password).then((result) => {
                //if auth passed, then redirect to the main page
                this.setState({
                    redirect: true
                })
            }).catch((error) => {
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })
    
            //set the user email and password and send them to app.js
            auth.onAuthStateChanged(user => {
                this.setState({
                    user,
                    email,
                    password
                }, () => {
                    const {
                        getEmail
                    } = this.props;
    
                    getEmail(email, user)
                })
            })
        }

    }
    
    //when the user is null, log in
    login = (e) => {
        e.preventDefault();

        const email = this.state.email;
        const password = this.state.password;
        
        this.checkStatus(email, password)
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            }
        });
    }

    renderRedirect = () => {
        if (this.state.redirect){
            return <Redirect to='/main'></Redirect>
        }else{
            return <Redirect to='/login'></Redirect>
        }
    }

    //when the user continue as a guest
    guest = (e) => {
        e.preventDefault()
        const email = 'guest@guest.com'
        const password = 'guests'

        this.checkStatus(email,password)
    }
    
    render(){
        return(
            <div className="loginPage">
                {this.renderRedirect()}
                <div className="loginContent">
                    <div className="loginLogo">
                        <img src={calendarLogo} alt="A calendar with a check mark inside. Icon made by Free icons from www.freeicons.io"/>
                    </div>
    
                    <form action="GET" className="loginForm" onSubmit={this.checkStatus}>
                        <h2>Welcome Back!</h2>
                        <label htmlFor="email">Emaill address</label>
                        <input type="email" id="email" name="email" onChange={this.handleChange} placeholder="sample@alice.com" required></input>
    
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" onChange={this.handleChange} placeholder="abc123" required></input>
    
                        <Link to="/register">Don't have an account yet? Register here!</Link>

                        <button className="guest" href="" onClick={this.guest}>Or continue as a guest</button>


                        <button onClick={this.login}>Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
