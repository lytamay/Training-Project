import React, { useState } from 'react';
import '../css/Navbar.css'
import { Link,useHistory } from 'react-router-dom';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import FormLogin from './FormLogin';
import { useRecoilState } from 'recoil';
import { logInState, getLoginState, getVisibleState,
  getVisibleLogoutState, inforPersonState, getSearchState } from '../state/State';
import Search from 'antd/lib/input/Search';
import FormLogout from './FormLogout';

function Navbar(props) {
  const [login , setLogin] = useRecoilState(getLoginState)
  const [visible, setVisible] = useRecoilState(getVisibleState)
  const [valueInput, setValueInput] = useState('')
  const history = useHistory()
  const handelChangeLogout = () =>{
    setLogin(false)
    // setVisibleOut(true)
  }
  const showFormLogin = () =>{
    setVisible(true)
  }
  const menu = (
    <Menu>
      <Menu.Item>
        <a rel="noopener noreferrer" href="/infor-personal">
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
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      setValueInput('')
      history.push(`/tim-kiem-bai-hat/${valueInput}`)
    }
  }
  const handelChangeValue = (e) =>{
    setValueInput(e.target.value)
  }
  
  return (
    <div className = 'navbar'>
      <Link to="/">Home</Link>
      <Link to="/baihat">Bai hat</Link>
      <Link to="/playlist">Playlist</Link>
      <input value={valueInput} type="text" placeholder="search" onKeyDown={_handleKeyDown} onChange={handelChangeValue}/>
      <Dropdown overlay={login ? menu:menu1}>
        <Avatar style={{float:'right', marginRight: '20px', right: '0px'}} icon={<UserOutlined />} />
      </Dropdown>   
      <FormLogin visible={visible}/> 
      {/* <FormLogout visible={visible}/> */}
    </div>  
  );
}

export default Navbar;