import logo from './logo.svg';
import './App.css';

import {
  NavBarHeader2 
 } from './ui-components';
 
 

function App() {
  return (
    <div className="App">
      <NavBarHeader2 width={"100%"} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          FUNCIONOU 
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
