import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';

function Home() {
  return(
      <div>Home</div>    
  );
}

function Other() {
  return(
      <div>Other</div>    
  );
}

function Secret() {
  return(
      <div>Secret</div>    
  );
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="flex-container">
          <div className="navi">
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/other">Other</Link></li>
              <li><Link to="/secret">Secret</Link></li>
            </ul>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/secret" component={Secret} />
              <Route exact path="/other/" component={Other} />
            </Switch>
          </div>
          <div className="content">2</div>
          <div className="content">3</div>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
