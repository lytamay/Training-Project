import Navbar from '../components/Navbar';
import { Layout, Row, Col } from 'antd';
import Theme from '../components/chung/Theme';
import ListAlbum from '../components/chung/ListAlbum';
import { useRecoilState } from 'recoil';
import {getAlbumApiState} from '../state/State';
import React, { useEffect } from 'react';
import {getTrackBySearch} from '../API/GetListmusicAPI';
import ChudeHot from '../components/ChudeHot';
import Footer from '../components/Footer';
import { Tabs } from 'antd';
import Album from '../components/chung/Album';
import ListMusic from '../components/ListMusic';

const { TabPane } = Tabs;

function Baihat(props) {
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
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Hot music" key="1">
                            <Theme color='red' fontzize='40px' theme='Nhac hot nhat'/>
                            <ListMusic/>
                        </TabPane>
                        <TabPane tab="New music" key="2">
                            <Theme color='green' fontzize='40px' theme='Nhac moi nhat'/>
                            <ListMusic/>
                        </TabPane>
                    </Tabs>
                </Col>
                <Col className ="group-content-right" offset={1} span={5}>
                    <Theme fontzize='20px' color='black' theme='Ca si hot'/>
                    <Theme fontzize='20px' color='black' theme='Chu de hot'/>
                    <ChudeHot theme="Nhac Han" background='blue'/>
                </Col>
            </Row>
            <Footer/>
        </Layout>
    );
}

export default Baihat;