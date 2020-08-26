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

function Singer(props) {
    const id = props.match.params.id
    const [inforArtistState, setInforArtistState] = useState([])
    useEffect ( () =>{
        getTrackByArtist(id).then(res => {
            const data = res.data
            setInforArtistState(data)
        })
    },[])
    
    return (
        <Layout>
            <Navbar/>
            <InforOfSinger track ={inforArtistState}/>
            <Row>
                <Col offset={1} span={17}>
                    <Theme color='#8B4513' fontzize='30px' theme='Tieu su'/>
                    <h1>luong an bum</h1>
                    <h1>fan</h1>
                    <TieuSu/>

                    <Theme color='#8B4513' fontzize='30px' theme='Album'/>
                    {/* <ListAlbum/> */}
                    <Theme color='#8B4513' fontzize='30px' theme='Bai hat'/>
                    {/* <ListMusic/> */}
                </Col>
                <Col offset={1} span={5}>
                    <Theme color='#214545' fontzize='20px' theme='Cac Nghe Si Khac'/>
                    <Row gutter={10,10}>
                        <OtherSinger span='24'/>
                    </Row>
                    <Row gutter={10,10}> 
                        <OtherSinger span='12'/>
                        <OtherSinger span='12'/>    
                    </Row>
                </Col>
            </Row>
            <Footer/>
        </Layout>
    );
}

export default Singer;