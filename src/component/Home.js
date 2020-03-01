import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Granim from 'granim';
import logo from '../assets/rabbit_white.svg';



class Home extends Component{
    constructor(){
        super();
        
    };



    render(){
        return(
            <div className="home">
                <div className="homeHead">
                    <div className="logo">
                        <img src={logo} alt="A rabbit inspired by Alice in wonderland. Cr:Max Jiang"/>
                    </div>
    
                    <nav>
                        <ul>
                            <li>
                                <a href = "/login">Login</a>
                            </li>
                            <li>
                                <a href="/register">Register</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <h1 className="logo-mask">TIME LOGGER</h1>
                <h2>A handy tool that helps you track your time</h2>
            </div>
        )
    }
}

export default Home