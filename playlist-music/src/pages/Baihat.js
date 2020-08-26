import Navbar from '../components/Navbar';
import { Layout, Row, Col } from 'antd';
import Theme from '../components/chung/Theme';
import { useRecoilState } from 'recoil';
import React, { useEffect, useState } from 'react';
import ChudeHot from '../components/ChudeHot';
import Footer from '../components/Footer';
import { Tabs } from 'antd';
import ListMusic from '../components/ListMusic';
import { getTrackByAlbum, getTrackBySearch, getTrackByTrack } from '../API/GetListmusicAPI';
import { getTrackListArtistState, getListHotNewState } from '../state/State'

const { TabPane } = Tabs;

function Baihat(props) {
    const track = props.track

    // console.log(track);
    // const [trackArtistState , setTrackArtistState] = useRecoilState(getTrackListArtistState)
    // const [trackListState, setTrackListState] = useState([])
    // const [listHotNewState, setlistHotNewState] = useState(getListHotNewState)
    const [listHotState, setListHotState] = useState([])
    const [listNewState, setListNewState] = useState([])
    const [trackHotNewDate, setTrackHotNewDate] = useState([])

    useEffect(() => {
        getTrackBySearch().then((res) => {
            const respone = res.data.data
            const tam = []
            for (let i = 0; i < respone.length; i++) {
                getTrackByTrack(respone[i].id).then(res => {
                    const data = res.data
                    tam.push(data)
                })
            }

            // for(let j = 0 ;j<respone.length -1 ;j++){
            //     // if(!tam[j].release_date){
            //     //     return null
            //     // }
            //    for (let k = j+1 ; k<respone.length ;k++){
                   
            //         // if(new Date(tam[j].release_date) < new Date(tam[k].release_date) ){
            //         //     let tg = tam[j]
            //         //     tam[j] = tam[k]
            //         //     tam[k] = tg
            //         // }
            //         console.log(tam[j].release_date);
            //    }
            // }
            setTrackHotNewDate(tam)
        })
    }, [])

    console.log(trackHotNewDate);
    return (
        <Layout>
            <Navbar />
            <Row className="content">
                <Col className="group-content-left" offset={1} span={17}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Hot music" key="1">
                            <Theme color='red' fontzize='40px' theme='Nhac hot nhat' />
                            {/* <ListMusic track={trackArtistState} /> */}
                        </TabPane>
                        <TabPane tab="New music" key="2">
                            <Theme color='green' fontzize='40px' theme='Nhac moi nhat' />
                            {/* <ListMusic track={trackArtistState}/> */}
                        </TabPane>
                    </Tabs>
                </Col>
                <Col className="group-content-right" offset={1} span={5}>
                    <Theme fontzize='20px' color='black' theme='Ca si hot' />
                    <Theme fontzize='20px' color='black' theme='Chu de hot' />
                    <ChudeHot theme="Nhac Han" background='blue' />
                </Col>
            </Row>
            <Footer />
        </Layout>
    );
}

export default Baihat;