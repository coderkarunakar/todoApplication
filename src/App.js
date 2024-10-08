import logo from './logo.svg';
import './App.css';
import React from 'react';
import DataFetcher from './DataFetcher';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1> React & Node.js Integration</h1>
      <DataFetcher/>
      </header>
    </div>
  );
}

export default App;
