import React from 'react';
import { Row, Col, Button } from 'antd';
import '../css/MusicItem.css';
import {CustomerServiceOutlined, CaretRightOutlined, HeartOutlined } from '@ant-design/icons';
import InforCasy from './InforCasy';


function MusicItem(props) {
    return (
        <Row className='box-music'>
            <Col className='box-music-left' span={12}>
                <InforCasy fontSize='30px'/>
            </Col>
            <Col span={6}>
                <div>
                    <Button style={{outline: 'none', border: 'none'}} icon={<CustomerServiceOutlined/>}>113</Button>
                </div>
            </Col>
            <Col span={3}>
                <a href="/detail-music"><Button icon={<CaretRightOutlined />}></Button></a>
                <Button icon={<HeartOutlined />}></Button>
            </Col>
            <Col span={3}>
                <Button danger>Download</Button>
            </Col>
        </Row>
    );
}

export default MusicItem;