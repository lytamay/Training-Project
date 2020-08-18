import React from 'react';
import '../css/InforCasy.css'
import { Row, Col } from 'antd';

function InforCasy(props) {
    const track=props.track

    if(!track.artist){
        return null
    }
    const {picture_xl} = track.artist

    return (
        <Row className='infor-ca-sy'>
            <Col span={props.sizeanh}>
                <a href="#"><img src={picture_xl} alt={track.title_short}/></a>
            </Col>
            <Col span={props.sizetext} offset={1}>
                <h3 style={{fontSize: props.fontSizeTenBaihat}}>
                    <a href="/thong-tin-bai-hat">{track.title}</a>
                </h3>
                <span>
                    <a style={{fontSize: props.fontSizeTenCasy}} href="/thong-tin-ca-si">{track.artist.name} </a>
                    {/* <a style={{fontSize: props.fontSizeTenCasy}} href="/">Ten tac gia</a> */}
                </span>
            </Col>
        </Row>
    );
}

export default InforCasy;