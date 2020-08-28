import React, { useEffect, useState } from 'react';
import { Layout, Row, Col } from 'antd';
import Navbar from '../components/Navbar';
import { getTrackByAlbum } from '../API/GetListmusicAPI';
import PlayListMusicAlbum from '../components/PlayListMusicAlbum';
import RunListMusic from '../components/RunListMusic';
import Footer from '../components/Footer';
import ChudeAlbum from '../components/ChudeAlbum';
import BoxContent from '../components/chung/BoxContent'


function PlayListMusic(props) {
    const id = props.match.params.id
    const [playListMusicState, setPlayListMusicState] = useState([])
    const [playAlbumState, setPlayAlbumState] = useState([])
    const [handelChange, setHandelChange] = useState()
    useEffect(() => {
        getTrackByAlbum(id).then(res => {
            const data = res.data.tracks.data
            const respone = res.data
            setPlayAlbumState(respone)
            setPlayListMusicState(data)
            setHandelChange(data[0])
        })
    }, [])

    const onHandelChange = (track) => {
        setHandelChange(track)
    }
    console.log();
    return (
        <Layout>
            <Navbar />
            <Row justify="space-around" gutter={20}>
                <Col span={18} offset={1}>
                    <RunListMusic track={handelChange} album={playAlbumState} />
                    <PlayListMusicAlbum onChange={onHandelChange} track={playListMusicState} />
                </Col>
                <Col span={4} >
                    <BoxContent boxWidth='100%' boxHeight='50px' boxText='Cac chu de khac' boxColor='#161d40' colorText='white' fontSize='20px' margin='5px' />
                    <Row>
                        <ChudeAlbum id='103248'/>
                    </Row>
                </Col>
                <Col span={1} >

                </Col>
            </Row>
            <Footer />
        </Layout>
    );
}

export default PlayListMusic;