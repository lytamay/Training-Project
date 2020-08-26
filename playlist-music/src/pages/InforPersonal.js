import React, { useState } from 'react';
import { Layout, Row, Col,Menu ,Button } from 'antd';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {UserOutlined, VideoCameraOutlined, UploadOutlined} from '@ant-design/icons';
import Faverist from './Faverist';
import Login from './Login';
import UploadTrack from '../components/UploadTrack';

const { Sider, Content } = Layout;

function InforPersonal(props) {
    const [showFaveristState , setShowFaveristState] = useState(false)
    const [showUploadState , setShowUploadState] = useState(false)

    const handelShowFaveristState = () => {
        setShowUploadState(false)
        setShowFaveristState(true)
    }
    const handelShowUploadState = () =>{
        setShowUploadState(true)
        setShowFaveristState(false)
    }
    return (
        <Layout>
            <Navbar/>
            <Layout>
                <Sider trigger={null} collapsible>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />}>
                            Nguyen ngoc
                        </Menu.Item>
                        <Menu.Item key="2" onClick={handelShowFaveristState} active icon={<VideoCameraOutlined />}>
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
                </Content>
            </Layout>
        </Layout>
        <Footer/>
    </Layout>
    );
}

export default InforPersonal;