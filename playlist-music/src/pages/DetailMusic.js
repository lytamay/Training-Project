import React, { useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import Navbar from '../components/Navbar';
import Theme from '../components/chung/Theme';
import Footer from '../components/Footer';
import InforMusic1 from '../components/InforMusic1';
import '../css/DetailMusic.css'
import InforDetailMusic from '../components/InforDetailMusic';
import PlayMusic from '../components/PlayMusic';
import { getTrackByTrack} from '../API/GetListmusicAPI';
import { useRecoilState } from 'recoil';
import {gettrackState} from '../state/State'
import BoxMusic from '../components/BoxMusic';

function DetailMusic(props) {
    const [trackState , setTrackState] = useRecoilState(gettrackState)
    const idMusic=props.match.params.id

    useEffect(() => {
        getTrackByTrack(idMusic)
        .then((res) => {
            const data = res.data
            setTrackState(data)
        })
        .catch((error) => {
            console.error(error)
        })
    },[])
    if(!trackState.album){
        return null
    }
    const ranh = `Ranh:${trackState.rank}`
    const trackListAlbum = trackState.artist.tracklist
    const trackArtistAlbum = trackState.album.tracklist
    
    return (
        <Layout>
            <Navbar/>
            <Row>
                <Col offset={1} span={17}>
                    <Row>
                        <Col span={18}>
                        <   Theme color='Black' fontzize='30px' theme={trackState.title} />
                        </Col>
                        <Col span={6}>
                            <Theme color='gray' fontzize='30px' theme={ranh} />
                        </Col>
                    </Row>
                    <PlayMusic key={trackState.id} track={trackState}/> 
                    <div className='Box-informusic1'>
                       <InforMusic1 key={trackState.id} track={trackState} />
                    </div>
                    <div style={{ border: '1px solid gray', paddingTop: '14px' , paddingBottom: '14px' , paddingLeft: '10px'}}>
                        <InforDetailMusic key={trackState.id} track={trackState}/>
                    </div>
                    <Theme color='Black' fontzize='30px' theme='Bai hat trong album' />
                    <BoxMusic trackList={trackListAlbum}/>
                    <Theme color='Black' fontzize='30px' theme='Bai hat cua ca si' />
                    {/* <BoxMusic trackList={trackListAlbum}/> */}
                </Col>
                <Col offset={1} span={5}>
                    <p>asas</p>
                </Col>
            </Row>
            <Footer/>
        </Layout>
    );
}

export default DetailMusic;