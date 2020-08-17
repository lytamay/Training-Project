import React from 'react';
import { Row, Col } from 'antd';
import '../css/InforOfSinger.css'

function InforOfSinger(props) {
    return (
        <Row className='box-infor-singer'>
            <Col span={6} offset={2}>
                <div>
                    <img src="https://avatar-nct.nixcdn.com/singer/avatar/2017/10/18/f/f/1/d/1508320622965.jpg" alt=""/>
                    <h2> Ten ca sy</h2>
                    <h4>Ngay sinh: </h4>
                    <h4>Gioi tinh: </h4>
                    <h4>Quoc Gia: </h4>
                </div>
            </Col>
            <Col span={14}>
                <img src="https://avatar-nct.nixcdn.com/singer/avatar/2017/10/18/f/f/1/d/1508320622965.jpg" alt=""/>
            </Col>
            <Col span={2}>
            </Col>
        </Row>
    );
}

export default InforOfSinger;