import React, { useState } from 'react';
import { Layout, Row, Col,Menu ,Button } from 'antd';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {UserOutlined, VideoCameraOutlined, UploadOutlined} from '@ant-design/icons';
import Faverist from './Faverist';
import Login from './Login';
import UploadTrack from '../components/UploadTrack';
import UserTrack from './UserTrack';
import Theme from '../components/chung/Theme';
import BoxContent from '../components/chung/BoxContent';

const { Sider, Content } = Layout;

function InforPersonal(props) {
    const [showFaveristState , setShowFaveristState] = useState(false)
    const [showUploadState , setShowUploadState] = useState(false)
    const [showUserState , setShowUserState] = useState(true)

    const handelShowFaveristState = () => {
        setShowUploadState(false)
        setShowUserState(false)
        setShowFaveristState(true)
    }
    const handelShowUploadState = () =>{
        setShowUploadState(true)
        setShowFaveristState(false)
        setShowUserState(false)
    }
    const handelShowUserState = () =>{
        setShowUploadState(false)
        setShowFaveristState(false)
        setShowUserState(true)
    }
    return (
        <Layout>
            <Navbar/>
            <BoxContent boxWidth='100%' boxHeight='106px' boxText='Khong co du lieu' boxColor='#51258f' colorText='white'  fontSize='40px' margin='100px'/>
            <Layout>
                <Sider trigger={null} collapsible>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" active  onClick={handelShowUserState} icon={<UserOutlined />}>
                           Thong tin ca nhan
                        </Menu.Item>
                        <Menu.Item key="2" onClick={handelShowFaveristState} icon={<VideoCameraOutlined />}>
                            Danh sach yeu thich
                        </Menu.Item>
                        <Menu.Item key="3" onClick={handelShowUploadState} icon={<UploadOutlined />}>
                            Tai len
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                <Content className="site-layout-background" style={{margin: '24px 16px', padding: 24, minHeight: 280,}}>
                    {showFaveristState && <Faverist/>}
                    {showUploadState && <UploadTrack/>}
                    {showUserState && <UserTrack/>}
                </Content>
            </Layout>
        </Layout>
        <Footer/>
    </Layout>
    );
}

export default InforPersonal;