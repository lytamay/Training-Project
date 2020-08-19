import Navbar from '../components/Navbar';
import { Layout, Row, Col } from 'antd';
import Theme from '../components/chung/Theme';
import { useRecoilState } from 'recoil';
import React, { useEffect, useState } from 'react';
import ChudeHot from '../components/ChudeHot';
import Footer from '../components/Footer';
import { Tabs } from 'antd';
import ListMusic from '../components/ListMusic';
import { getTrackByAlbum} from '../API/GetListmusicAPI';
import {getTrackListArtistState} from '../state/State'

const { TabPane } = Tabs;

function Baihat(props) {
    const [trackArtistState , setTrackArtistState] = useRecoilState(getTrackListArtistState)
    const [trackListState, setTrackListState] = useState([])

    useEffect( () =>{
        getTrackByAlbum()
        .then( res => {
            const data = res.data
            setTrackArtistState(data)
        }).catch (err => console.log(err))
    },[])

    if(!trackArtistState.tracks){
        return null
    }

    const tam = trackArtistState.tracks.data;
    // setTrackArtistState(tam)
    // console.log(trackListState);
    console.log(tam);

    return (
        <Layout>
            <Navbar/>
            <Row className="content">
                <Col className="group-content-left" offset={1} span={17}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Hot music" key="1">
                            <Theme color='red' fontzize='40px' theme='Nhac hot nhat'/>
                            {/* <ListMusic track={trackArtistState} /> */}
                        </TabPane>
                        <TabPane tab="New music" key="2">
                            <Theme color='green' fontzize='40px' theme='Nhac moi nhat'/>
                            {/* <ListMusic track={trackArtistState}/> */}
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