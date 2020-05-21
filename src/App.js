import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/Clock';
import WebSite from './components/WebSite';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <h2>欢迎来到菜鸟教程</h2>
          <Clock/>
          <WebSite/>
        </header>
      </div>
    );
  }
}

export default App;
