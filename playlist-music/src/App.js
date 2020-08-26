import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Baihat from './pages/Baihat';
import DetailMusic from './pages/DetailMusic';
import Singer from './pages/Singer';
import InforPersonal from './pages/InforPersonal';
import Search from './pages/Search';
import Playlist from './pages/Playlist';
import { getTrackBySearch, getTrackByTrack} from './API/GetListmusicAPI';
import { getListHotNewState } from './state/State';
import PlayListMusic from './pages/PlayListMusic';


function App() {
  
  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/play-list'>
          <Playlist/>
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
        <Route path='/thong-tin-ca-si/:id' component={Singer}/>
        <Route path='/chudeAlbum/:id' exact component={PlayListMusic} />
      </Switch>
    </Router>
  );
}

export default App;
