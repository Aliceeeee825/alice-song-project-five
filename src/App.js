import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './index.css'

import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';
import Header from './component/Header';
import Main from './component/Main'

class App extends Component {
  render(){
    return (
      <Router basename="/">
        <div className="App">
          {/* <Switch> */}
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/main' component={Main} />
            <Route path='/' component={Home} exact />
          {/* </Switch> */}
        </div>
      </Router>
    );
  }
}

export default App;
