import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm.js';
import LoginHeader from './LoginHeader.js';

function App() {
  return (
    <div className="App">
    <LoginHeader/>
      <LoginForm />
    </div>
  );
}

export default App;
