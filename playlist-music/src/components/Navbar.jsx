import React, { useState } from 'react';
import '../css/Navbar.css'
import { Link, useHistory } from 'react-router-dom';
import { Avatar, Button, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Menu, Dropdown } from 'antd';
import FormLogin from './FormLogin';
import { useRecoilState } from 'recoil';
import { getLoginState, getVisibleState } from '../state/State';

function Navbar(props) {
  const [login, setLogin] = useRecoilState(getLoginState)
  const [visible, setVisible] = useRecoilState(getVisibleState)
  const [valueInput, setValueInput] = useState('')
  const history = useHistory()
  const handelChangeLogout = () => {
    setLogin(false)
  }
  const showFormLogin = () => {
    setVisible(true)
  }
  const menu = (
    <Menu className='Log-In-Form'>
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
        <Button onClick={showFormLogin} style={{ background: '#3c9ae8' }} type="primary" >
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
  const handelChangeValue = (e) => {
    setValueInput(e.target.value)
  }

  return (
    <Row className='navbar'>
      <Col span={1}>
      </Col>
      <Col span={2}>
        <Link to="/"><img class="rg_i Q4LuWd"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdTDLnjsk-JCnP4P9Asr89zxEPdkpQRfthzg&amp;usqp=CAU" jsname="Q4LuWd"  alt="Check Out Our New Logo - nhac,nhac vang,mp3,nhac.vui" data-iml="293249.1350000019" /></Link>
      </Col>
      <Col span={2} offset={1}>
        <Link to="/baihat">Bai hat</Link>
      </Col>
      <Col span={2}>
        <Link to="/play-list">Playlist</Link>
      </Col>
      <Col span={8}>
        <input value={valueInput} style={{width: '100%', height:'40px', borderRadius:'20px'}} type="text" placeholder="Tim kiem ten bai hat, ca sy..." onKeyDown={_handleKeyDown} onChange={handelChangeValue} />
      </Col>
      <Col span={7}>
        <Dropdown overlay={login ? menu : menu1}>
          <Avatar style={{ float: 'right', marginRight: '20px', right: '0px' }} icon={<UserOutlined />} />
        </Dropdown>
        <FormLogin visible={visible} />
      </Col>
      <Col span={2}>
      </Col>
    </Row>
  );
}

export default Navbar;