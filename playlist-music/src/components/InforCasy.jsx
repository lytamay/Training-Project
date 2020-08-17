import React from 'react';
import '../css/InforCasy.css'
import { Row, Col } from 'antd';

function InforCasy(props) {
    return (
        <Row className='infor-ca-sy'>
            <Col span={props.sizeanh}>
                <a href="#"><img src="https://avatar-nct.nixcdn.com/song/2020/08/13/6/3/1/8/1597293866868.jpg" alt=""/></a>
            </Col>
            <Col span={props.sizetext} offset={1}>
                <h3 style={{fontSize: props.fontSizeTenBaihat}}>
                    <a href="#">Ten bai hat</a>
                </h3>
                <span>
                    <a style={{fontSize: props.fontSizeTenCasy}} href="#">Ten ca sy, </a>
                    <a style={{fontSize: props.fontSizeTenCasy}} href="#">Ten tac gia</a>
                </span>
            </Col>
        </Row>
    );
}

export default InforCasy;