import React, { Component } from 'react';
// import './App.css';
import './index.css'

import Header from './component/Header';
import Main from './component/Main'

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
