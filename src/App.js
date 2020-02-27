import React, { Component } from 'react';
import './App.css';

import Header from './component/Header';
import Main from './component/Main'

class App extends Component {
  render(){
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
