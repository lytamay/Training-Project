import React, { useState } from 'react';
import '../css/Navbar.css'
import { Link } from 'react-router-dom';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import FormLogin from './FormLogin';
import { useRecoilState } from 'recoil';
import { logInState, getLoginState, getVisibleState, inforPersonState } from '../state/State';


function Navbar(props) {
  const [login , setLogin] = useRecoilState(getLoginState)
  const [visible, setVisible] = useRecoilState(getVisibleState)
  // const [infoPersonState, setInforPersonState] = useRecoilState(inforPersonState)
  // const [LoginState , setLoginState] = useRecoilState(logInState)
  const handelChangeLogout = () =>{
    setLogin(false)
  }
  const showFormLogin = () =>{
    setVisible(true)
  }

  // if(!infoPersonState){
  //   return null
  // }
  // console.log(inforPersonState);
  // const link = `/thong-tin-ca-nhan/${inforPersonState.token}`
  const menu = (
    <Menu>
      <Menu.Item>
        <a rel="noopener noreferrer" href="#">
          Thong tin ca nhan
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={handelChangeLogout} rel="noopener noreferrer" href="#">
          Dang suat
        </a>
      </Menu.Item>
    </Menu>
  );
  const menu1 = (
    <Menu>
      <Menu.Item>
        <Button onClick={showFormLogin} style={{background: '#3c9ae8'}} type="primary" >
          Dang ky
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className = 'navbar'>
      <Link to="/">Home</Link>
      <Link to="/baihat">Bai hat</Link>
      <Link to="/playlist">Playlist</Link>
      <input type="text" placeholder="search"/>
      <Dropdown overlay={login ? menu:menu1}>
        <Avatar style={{float:'right', marginRight: '20px', right: '0px'}} icon={<UserOutlined />} />
      </Dropdown>   
      <FormLogin visible={visible}/> 
    </div>  
  );
}

export default Navbar;