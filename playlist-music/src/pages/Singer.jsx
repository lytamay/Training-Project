import React, { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import Navbar from '../components/Navbar';
import InforOfSinger from '../components/InforOfSinger';
import Footer from '../components/Footer';
import Theme from '../components/chung/Theme';
import TieuSu from '../components/TieuSu';
import ListAlbum from '../components/chung/ListAlbum';
import ListMusic from '../components/ListMusic'
import OtherSinger from '../components/OtherSinger';
import { getTrackByArtist } from '../API/GetListmusicAPI';
import BoxContent from '../components/chung/BoxContent';
import AmNhacTheoChuDe from '../components/AmNhacTheoChuDe';

function Singer(props) {
    const id = props.match.params.id
    const [inforArtistState, setInforArtistState] = useState([])
    useEffect(() => {
        getTrackByArtist(id).then(res => {
            const data = res.data
            setInforArtistState(data)
        })
    }, [])

    return (
        <Layout>
            <Navbar />
            <BoxContent boxWidth='100%' boxHeight='80px' boxText='Khong co du lieu' boxColor='#51258f' colorText='white' fontSize='40px' margin='100px' />
            <InforOfSinger track={inforArtistState} />
            <Row>
                <Col offset={1} span={17}>
                    <Theme color='#8B4513' fontzize='30px' theme='Tieu su' />
                    <TieuSu />
                    <Theme color='#8B4513' fontzize='30px' theme='Album' />
                    {/* <ListAlbum/> */}
                    <Theme color='#8B4513' fontzize='30px' theme='Bai hat' />
                    {/* <ListMusic/> */}
                </Col>
                <Col offset={1} span={5}>
                    <Theme color='#214545' fontzize='20px' theme='Cac Nghe Si Khac' />
                    <Row gutter={10, 10}>
                        <AmNhacTheoChuDe key=' 42543161' id=' 42543161' span={24} />
                    </Row>
                    <Row gutter={10, 10}>
                        <AmNhacTheoChuDe key='112552372' id='112552372' span={12} size='15px' />
                        <AmNhacTheoChuDe key='160615152' id='160615152' span={12}  size='15px'/>
                    </Row>
                </Col>
            </Row>
            <Footer />
        </Layout>
    );
}

export default Singer;