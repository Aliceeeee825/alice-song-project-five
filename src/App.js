import React, { Component } from 'react';
import { HashRouter, Route} from 'react-router-dom'
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
      user:'',
    }
  }

  getEmail = (email, user) => {
    this.setState({
      userEmail: email,
      user: user
    })
  }

  render(){
    return (
      <HashRouter basename="/">
        <div className="App">
          <Route path='/login' render={() => <Login getEmail = {this.getEmail}/> }/>
          <Route path='/register' component={Register} />
          <Route path='/main' render={() => <Main userEmail ={this.state.userEmail} user={this.state.user}/> }/>
          <Route path='/' component={Home} exact/>
        </div>
      </HashRouter>
    );
  }
}

export default App;
