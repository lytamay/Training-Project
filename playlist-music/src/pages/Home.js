import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Slidebar from '../components/Slidebar';
import '../css/Home.css'
import ListAlbum from '../components/chung/ListAlbum';
import { useRecoilState } from 'recoil';
import {getAlbumApiState} from '../state/State';
import {getTrackBySearch} from '../API/GetListmusicAPI';
import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Theme from '../components/chung/Theme';
import Pages from '../components/chung/Pages'
import Footer from '../components/Footer';

function Home(props) {
    const [albumState, setAlbumState] = useRecoilState(getAlbumApiState)

    useEffect( () =>{
        getTrackBySearch()
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
                    <Slidebar album={albumState}/>
                    <Theme theme='Nghe gi hom nay'/>
                    <ListAlbum span='4' album={albumState}/>
                    <Theme theme='Moi phat hanh'/>
                    <ListAlbum span='4' album={albumState}/>
                    <Theme theme='Nhac hot nhat'/>
                    <ListAlbum span='4' album={albumState}/>
                </Col>
                <Col className ="group-content-right" offset={1} span={5}>
                    <p>sasas</p>
                </Col>
            </Row>
            <Footer/>
        </Layout>
    );
}

export default Home;