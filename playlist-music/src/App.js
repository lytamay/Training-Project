import React from 'react';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path ='/login'>
          <Login/>
        </Route>
        <Route path ='/'>
          <Home/>
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
