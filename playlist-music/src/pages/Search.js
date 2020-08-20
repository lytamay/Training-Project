import React, { useState } from 'react';
import { Layout, Row, Col,Menu ,Button } from 'antd';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {UserOutlined, VideoCameraOutlined, UploadOutlined} from '@ant-design/icons';
import Faverist from './Faverist';
import Login from './Login';
import SearchAll from './SearchAll';

const { Sider, Content } = Layout;

function Search(props) {
    const search = props.match.params.name
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
                            Tat Ca
                        </Menu.Item>
                        <Menu.Item key="2" onClick={handelShowFaveristState} icon={<VideoCameraOutlined />}>
                            Bai Hat
                        </Menu.Item>
                        <Menu.Item key="3" onClick={handelShowUploadState} icon={<UploadOutlined />}>
                            Nghe si
                        </Menu.Item>
                        <Menu.Item key="3" onClick={handelShowUploadState} icon={<UploadOutlined />}>
                            MV
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                <Content className="site-layout-background" style={{margin: '24px 16px', padding: 24, minHeight: 280,}}>
                    {showFaveristState && <SearchAll search={search}/>}
                    {showUploadState && <Login/>}
                </Content>
            </Layout>
        </Layout>
        <Footer/>
    </Layout>
    );
}

export default Search;