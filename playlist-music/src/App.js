import React from 'react';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Baihat from './pages/Baihat';
import DetailMusic from './pages/DetailMusic';
import Singer from './pages/Singer';

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
        <Route path ='/detail-music/:id' render={props => <DetailMusic {...props}/>}>
        </Route>
        <Route path ='/thong-tin-bai-hat'>
          <Singer/>
        </Route>
        <Route path ='/thong-tin-ca-si'>
          <Singer/>
        </Route>
      </Switch>
    </Router>
    );
}

export default App;
