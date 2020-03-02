import React, { Component } from 'react';
// import withFirebaseAuth from 'react-with-firebase-auth'
// import * as firebase from 'firebase/app';
// import 'firebase/auth';
// import firebaseConfig from '../firebase';
import ReactDom from 'react-dom';
import firebase from '../firebase';
import { Redirect } from 'react-router-dom';

import calendarLogo from '../assets/calendarLogo.svg'

//sample email and pw
// sample@alice.com
// abc123
// const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();


class Login extends Component{

    constructor(){
        super();
        this.state = {
            user: null,
            email: '',
            password: '',
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    
    
    checkStatus = (e) =>{
        e.preventDefault();
        // firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((res) =>{
        //     if (res.user){
        //         firebaseConfig.auth().setLoggedIn(true);
        //         return <Redirect to = '/main' />
        //     }
        // }).catch(e => {
        //     console.log(e.message)
        // })
    }

    // login = () => {
    //     auth.signInWithPopup(provider)
    //         .then((result) => {
    //             const user = result.user;
    //             this.setState({
    //                 user
    //             });
    //         });
    // }

    login = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    }

    logout = () => {
        auth.signOut()
            .then(() => {
                this.setState({
                    user: null
                });
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
        //firebase init
        // const {
        //     user,
        //     signOut,
        //     signInWithGoogle,
        // } = this.props;

        return(
            <div className="loginPage">
                <div className="loginContent">
                    <div className="loginLogo">
                        <img src={calendarLogo} alt="A calendar with a check mark inside. Icon made by Free icons from www.freeicons.io"/>
                    </div>
    
                    <form action="GET" className="loginForm" onSubmit={this.checkStatus}>
                        <h2>Welcome Back!</h2>
                        <label htmlFor="email">Emaill address</label>
                        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
    
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
    
                        <a href="/register">Don't have an account yet? Register here!</a>

                        {/* <button onClick={signInWithGoogle}>Sign in with Google</button> */}
    
                        {/* <button type="submit">Login</button> */}
                        {this.state.user ? <button onClick={this.logout}>Log Out</button> : <button onClick={this.login}>Log In</button>}
                    </form>
                </div>
            </div>
        )
    }
}

// export default Login 
// try {
//     const firebaseApp = firebase.initializeApp(firebaseConfig)
//     const firebaseAppAuth = firebaseApp.auth();
//     const providers = {
//         googleProvider: new firebase.auth.GoogleAuthProvider(),
//     };
// } catch (err) {
//     if (!/already exist/.test(err.message)) {
//         console.error('Firebase initialization error', err.stack)
//     }
// }
// const firebaseApp = firebase.initializeApp(firebaseConfig)
//     const firebaseAppAuth = firebaseApp.auth();
//     const providers = {
//         googleProvider: new firebase.auth.GoogleAuthProvider(),
//     };
// export default withFirebaseAuth({
//     providers,
//     firebaseAppAuth,
// })(Login);

export default Login
