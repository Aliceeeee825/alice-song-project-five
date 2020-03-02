import React, { Component } from 'react';
import ReactDom from 'react-dom';
import firebase from '../firebase'
// import firebaseConfig from '../firebase';
// import 'firebase/auth';
// import * as firebase from 'firebase/app';
import { Redirect } from 'react-router-dom'

import registerLogo from '../assets/registerLogo.svg'
import { findAllInRenderedTree } from 'react-dom/test-utils';

// const auth = firebase.auth()
// const provider = new firebase.auth.GoogleAuthProvider();

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

    // login = () => {
    //     auth.signInWithPopup(provider)
    //         .then((result) => {
    //             const user = result.user;
    //             this.setState({
    //                 user
    //             });
    //         });
    // }

    // logout = () => {
    //     auth.signOut()
    //         .then(() => {
    //             this.setState({
    //                 user: null
    //             });
    //         });
    // }

    // componentDidMount() {
    //     auth.onAuthStateChanged((user) => {
    //         if (user) {
    //             this.setState({ user });
    //         }
    //     });
    // }

    submitRegister = (e) => {
        e.preventDefault();
        // firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(res => {
        //     if (res.user){
        //         firebaseConfig.auth().setLoggedIn(true);
        //         return <Redirect to='/login' />
        //     }
        // }).catch((e)=>{
        //     console.log(e.message);
        // })
        if (this.state.password !== this.state.confirmedPassword){
            alert('wrong password');
            
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render(){
        // const provider = new firebase.auth.GoogleAuthProvider();
        // const auth = firebase.auth()

        return(
            <div className="registerPage">
                <div className="registerContent">
                    <div className="registerLogo">
                        <img src={registerLogo} alt="A calendar with a heart in the middle. Icon made by Free icons from www.freeicons.io" />
                    </div>

                    <form action="GET" className="registerForm" onSubmit={this.submitRegister}>
                        <h2>Hello Friend!</h2>
                        <label htmlFor="email">Emaill address</label>
                        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}></input>

                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}></input>

                        <label htmlFor="confirmedPassword">Confirmed Password</label>
                        <input type="password" id="confirmedPassword" name="confirmedPassword" value={this.state.confirmedPassword} onChange={this.handleChange}></input>

                        <a href="/login">Already have an account? Sign in here!</a>

                        {/* <button type="submit">Register</button> */}
                        {this.state.user ? <button onClick={this.logout}>Log Out</button> : <button onClick={this.login}>Log In</button>}
                    </form>
                </div>
            </div>
        )
    }
}

export default Register