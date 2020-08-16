import React from 'react';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Baihat from './pages/Baihat';

function App() {
  return (
    <Router>
      <Switch>
        <Route path ='/login'>
          <Login/>
        </Route>
        <Route exact path="/" render={props=><Home {...props} />}/>
        <Route path ='/baihat'>
          <Baihat/>
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
