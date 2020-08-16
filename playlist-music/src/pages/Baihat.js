import Navbar from '../components/Navbar';
import { Layout, Row, Col } from 'antd';
import Theme from '../components/chung/Theme';
import ListAlbum from '../components/chung/ListAlbum';
import { useRecoilState } from 'recoil';
import {getAlbumApiState} from '../state/State';
import React, { useEffect } from 'react';
import {getListmusicAPIBySearch} from '../API/GetListmusicAPI';
import ChudeHot from '../components/ChudeHot';

function Baihat(props) {
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
                    <Theme fontzize='40px' color='blue' theme='Nghe gi hom nay'/>
                    <ListAlbum span='4' album={albumState}/>
                </Col>
                <Col className ="group-content-right" offset={1} span={5}>
                    <Theme fontzize='20px' color='black' theme='Ca si hot'/>
                    
                    <Theme fontzize='20px' color='black' theme='Chu de hot'/>
                    <ChudeHot theme="Nhac Han" background='blue'/>
                </Col>
            </Row>
        </Layout>
    );
}

export default Baihat;