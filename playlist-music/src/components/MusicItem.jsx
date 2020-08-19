import React from 'react';
import { Row, Col, Button } from 'antd';
import '../css/MusicItem.css';
import {CustomerServiceOutlined, CaretRightOutlined, HeartOutlined } from '@ant-design/icons';
import InforCasy from './InforCasy';


function MusicItem(props) {
    const track=props.track
    if(!track.tracks){
        return null
    }
    // console.log(track.);
    const link = `/detail-music/${track.tracks.data.id}`
    return (
        <Row className='box-music'>
            <Col className='box-music-left' span={12} >
                <InforCasy track={props.track} sizeanh='10' sizetex='14' fontSizeTenBaihat='20px' fontSizeTenCasy='15px'/>
            </Col>
            <Col offset={8} offset={1}>
                <div>
                    <Button style={{outline: 'none', border: 'none'}} icon={<CustomerServiceOutlined/>}>113</Button>
                </div>
            </Col>
            <Col span={3}offset={3} >
                <a href={link}><Button icon={<CaretRightOutlined />}></Button></a>
                <Button icon={<HeartOutlined />}></Button>
            </Col>
            <Col span={3}>
                <Button danger>Download</Button>
            </Col>
        </Row>
    );
}

export default MusicItem;