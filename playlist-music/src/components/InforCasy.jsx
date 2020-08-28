import React from 'react';
import '../css/InforCasy.css'
import { Row, Col } from 'antd';

function InforCasy(props) {
    const track=props.track
   
    if(!track.artist){
        return null
    }
    const {picture_xl} = track.artist
    const link = `/thong-tin-ca-si/${track.artist.id}`
    const link1 = `/detail-music/${track.id}`
    return (
        <Row className='infor-ca-sy'>
            <Col span={props.sizeanh}>
                <img src={picture_xl} alt={track.title_short}/>
            </Col>
            <Col span={props.sizetext} offset={1}>
                <h3 style={{fontSize: props.fontSizeTenBaihat}}>
                    <a href={link1}>{track.title}</a>
                </h3>
                <span>
                    <a style={{fontSize: props.fontSizeTenCasy}} href={link}>{track.artist.name} </a>
                </span>
            </Col>
        </Row>
    );
}

export default InforCasy;