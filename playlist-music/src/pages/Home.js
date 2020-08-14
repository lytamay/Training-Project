import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Slidebar from '../components/Slidebar';
import '../css/Home.css'
import ListAlbum from '../components/chung/ListAlbum';
import { useRecoilState } from 'recoil';
import {getAlbumApiState} from '../state/State';
import {getListmusicAPIBySearch} from '../API/GetListmusicAPI';
import axios from 'axios';
import { Layout, Menu, Breadcrumb, Button, Row, Col } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import Theme from '../components/chung/Theme';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function Home(props) {
    const [albumState, setAlbumState] = useRecoilState(getAlbumApiState)

    useEffect( () =>{
        getListmusicAPIBySearch()
        .then( res => {
            const data = res.data.data
            setAlbumState(data)
        }).catch (err => console.log(err))
    },[])

    return (
        <Layout>
            <Navbar/>
            <Row className="content">
                <Col className="group-content-left" offset={1} span={17}>
                    <Slidebar/>
                    <Theme theme='Nghe gi hom nay'/>
                    <ListAlbum album={albumState}/>
                    <Theme theme='Nhac hot nhat'/>
                    <ListAlbum album={albumState}/>
                </Col>
                <Col className ="group-content-right" offset={1} span={5}>
                    <p>sasas</p>
                </Col>
            </Row>
        </Layout>
    );
}

export default Home;