import React, { useEffect, useState } from 'react';
import { Layout, Row, Col, Carousel } from 'antd';
import Navbar from '../components/Navbar';
import { getTrackByAlbum } from '../API/GetListmusicAPI';
import PlayListMusicAlbum from '../components/PlayListMusicAlbum';
import RunListMusic from '../components/RunListMusic';
import Footer from '../components/Footer';
import BoxContent from '../components/chung/BoxContent'
import AmNhacTheoChuDe from '../components/AmNhacTheoChuDe';
import BoxCasi from '../components/BoxCasi';


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
            <BoxContent boxWidth='100%' boxHeight='100px' boxText='' boxColor='#161d40' colorText='white' fontSize='20px' margin='5px' />
            <Row justify="space-around" gutter={20}>
                <Col span={18} offset={1}>
                    <RunListMusic track={handelChange} album={playAlbumState} />
                    <PlayListMusicAlbum onChange={onHandelChange} track={playListMusicState} />
                </Col>
                <Col span={4} >
                    <BoxContent boxWidth='100%' boxHeight='50px' boxText='Cac chu de khac' boxColor='#161d40' colorText='white' fontSize='20px' margin='5px' />
                    <Row>
                        <AmNhacTheoChuDe key=' 53401272' id=' 53401272' span={24} size='15px' />
                    </Row>
                    {/* <Carousel autoplay>
                        <div>
                            <BoxCasi id='728458082' sizeanh='10' sizetext='14' fontSizeTenBaihat='12px' fontSizeTenCasy='20px' />
                        </div>
                        <div>
                            <BoxCasi id='6982223' sizeanh='10' sizetext='14'fontSizeTenBaihat='12px' fontSizeTenCasy='20px' />
                        </div>
                        <div>
                            <BoxCasi id='879263612' sizeanh='10' sizetext='14' fontSizeTenBaihat='12px' fontSizeTenCasy='20px' />
                        </div>
                        <div>
                            <BoxCasi id='704047132' sizeanh='10' sizetext='14' fontSizeTenBaihat='12px' fontSizeTenCasy='20px' />
                        </div>
                    </Carousel> */}
                    <Row>
                        <AmNhacTheoChuDe key=' 92735082' id=' 92735082' span={24} size='15px' />
                    </Row>
                    <Row>
                        <AmNhacTheoChuDe key=' 98020932' id='98020932' span={24} size='15px' />
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