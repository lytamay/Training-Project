import React from 'react';
import { Row, Col, Button } from 'antd';
import InforCasy from './InforCasy';
import {HeartOutlined,VerticalAlignBottomOutlined,ShareAltOutlined } from '@ant-design/icons';
import { handelAddListFaverist } from '../HandelAddListFaverist';

function InforMusic1(props) {
    const track = props.track
    let music = JSON.parse(localStorage.getItem('faverist')) || []
    const isFaverist = music.findIndex(value => value.id === track.id)
    return (
    <Row style={{alignItems: 'center', alignContent: 'center'}}>
        <Col span={12}>
            <InforCasy track={track} sizeanh='3' sizetex='20' fontSizeTenBaihat='15px' fontSizeTenCasy='10px'/>
        </Col>
        <Col span={12}>
            <div style={{float:"right"}}>
                <Button style={{ color: isFaverist <0 ? 'gray' : 'red' }} onClick={() => handelAddListFaverist(track)} icon={<HeartOutlined />}>Them vao</Button>
                <Button icon={<VerticalAlignBottomOutlined />}>Download</Button>
                <Button icon={<ShareAltOutlined />}>Chia se</Button>
            </div>
        </Col>
    </Row> 
    );
}

export default InforMusic1;