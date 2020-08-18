import React from 'react';
import { Row, Col } from 'antd';
import '../css/InforOfSinger.css'

function InforOfSinger(props) {
    return (
        <Row className='box-infor-singer'>
            <Col span={6} offset={1}>
                <div>
                    <img style={{width: '100px', height: '100px', borderRadius: '100px  '}} src="https://avatar-nct.nixcdn.com/singer/avatar/2017/10/18/f/f/1/d/1508320622965.jpg" alt=""/>
                </div>   
                <h2> Ten ca sy</h2>
                <h4>Ngay sinh: </h4>
                <h4>Gioi tinh: </h4>
                <h4>Quoc Gia: </h4>    
            </Col>
            <Col span={16}>
                <img style={{width:'100%', height: '300px'}} src="https://avatar-nct.nixcdn.com/singer/avatar/2017/10/18/f/f/1/d/1508320622965.jpg" alt=""/>
            </Col>
            <Col span={1}>
            </Col>
        </Row>
    );
}

export default InforOfSinger;