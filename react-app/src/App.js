import React from 'react';
import logo from './logo.svg';
import './App.css';
import View from './component/View.js';
import LoginHeader from './component/LoginHeader.js';
import IndexHeader from './component/IndexHeader.js';
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

function App() {
  return (
   
   <Router>

    <div>
     
      <Switch>
        <Route exact path="/" component={IndexHeader} />
        <Route path="/login" component={View} />
       
       
      </Switch>
    </div>
  </Router>
     
    
  );
}

export default App;
