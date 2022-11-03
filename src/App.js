import logo from './logo.svg';
import './view/assets/css/App.css';
import http from './http-common';
import React, { useEffect } from 'react'

function App() {

  useEffect(() => {
    testAxios()
  })

  function testAxios() {
    http
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        console.log("api test => ", res.data);
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          git commit test
        </a>
      </header>
    </div>
  );
}

export default App;
