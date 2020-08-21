import React from 'react';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Baihat from './pages/Baihat';
import DetailMusic from './pages/DetailMusic';
import Singer from './pages/Singer';
import InforPersonal from './pages/InforPersonal';
import Search from './pages/Search';
import SearchAll from './pages/SearchAll';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route path='/baihat'>
          <Baihat />
        </Route>
        <Route path='/detail-music/:id' render={props => <DetailMusic {...props} />}>
        </Route>
        <Route path='/infor-personal' render={props => <InforPersonal {...props} />}>
        </Route>
        <Route path='/tim-kiem-bai-hat/:name' exact component={Search} />
        {/*   <Route path='/tim-kiem-bai-hat/:name/all' exact component={SearchAll} /> */}
        {/* <Route path='/tim-kiem-bai-hat/:name/bai hat' component={} >
        </Route>
        <Route path='/tim-kiem-bai-hat/:name/nghe-si' component={Search} >
        </Route> */}
        {/* </Route> */}
        
        <Route path='/thong-tin-bai-hat'>
          <Singer />
        </Route>
        <Route path='/thong-tin-ca-si'>
          <Singer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
