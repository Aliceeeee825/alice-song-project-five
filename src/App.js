import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './index.css'

import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Main from './component/Main'

class App extends Component {
  constructor(){
    super()

    this.state = {
      userEmail: '',
    }
  }

  getEmail = (email) => {
    this.setState({
      userEmail: email
    })
  }

  render(){
    return (
      <Router basename="/">
        <div className="App">
          {/* <Switch> */}
            <Route path='/login' render={() => <Login getEmail = {this.getEmail}/> }/>
            <Route path='/register' component={Register} />
            <Route path='/main' render={() => <Main userEmail ={this.state.userEmail}/> }/>
            <Route path='/' component={Home} exact/>
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;
