import React, { useState } from 'react';
import { Row, Col, Button } from 'antd';
import '../css/MusicItem.css';
import {CustomerServiceOutlined, CaretRightOutlined, HeartOutlined } from '@ant-design/icons';
import InforCasy from './InforCasy';
import {handelAddListFaverist} from '../HandelAddListFaverist'

function MusicItem(props) {
    const track=props.track
    const [hoverState , setHoverState] = useState(false)
    if(!track){
        return null
    }
    const handelChangeMouseOver = () =>{
        setHoverState(true)
    }
    const handelChangeMouseOut = () =>{
        setHoverState(false)
    }
    const link = `/detail-music/${track.id}`
    return (
        <Row className='box-music' style={{background: hoverState? '#828282' : 'white'}} onMouseOut={()=> handelChangeMouseOut()} onMouseOver={()=>handelChangeMouseOver()}>
            <Col className='box-music-left' span={12} >
                <InforCasy track={props.track} sizeanh='10' sizetex='14' fontSizeTenBaihat='20px' fontSizeTenCasy='15px'/>
            </Col>
            <Col span={2} offset={1}>
                <div>
                    <Button style={{outline: 'none', border: 'none'}} icon={<CustomerServiceOutlined/>}>113</Button>
                </div>
            </Col>
            <Col span={3}offset={3} >
                <a href={link}><Button icon={<CaretRightOutlined />}></Button></a>
                <Button onClick={() => handelAddListFaverist(track)} icon={<HeartOutlined />}></Button>
            </Col>
            <Col span={3}>
                <Button danger>Download</Button>
            </Col>
        </Row>
    );
}

export default MusicItem;