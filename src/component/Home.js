import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/homeLogo.svg';



class Home extends Component{
    render(){
        return(
            <div className="home">
                <div className="homeHead">
                    <div className="homeLogo">
                        <img src={logo} alt="A rabbit inspired by Alice in wonderland. cr to Max Jiang"/>
                    </div>
    
                    <nav>
                        <ul>
                            <li>
                                <Link to= "/login">Login</Link>
                            </li>
                            <li>
                                <Link to='/register'>Register</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className="homeText">
                    <h1>TIME LOGGER</h1>
                    <h2>A handy tool that helps you track your time</h2>
                </div>
            </div>
        )
    }
}

export default Home