import React from 'react';
import { Row, Col } from 'antd';
import '../css/InforOfSinger.css'

function InforOfSinger(props) {
    const track = props.track
    return (
        <Row className='box-infor-singer' >
            <Col span={6} offset={1}>
                <div>
                    <img style={{ width: '100px', height: '100px', borderRadius: '100px  ' }} src={track.picture_xl} alt={track.name} />
                </div>
                <h2> {track.name}</h2>
                <h5>Ngay sinh: khong co</h5>
                <h5>Gioi tinh: khong co </h5>
                <h5>Quoc Gia: khong co </h5>
            </Col>
            <Col span={16}>
                <img style={{ width: '100%', height: '300px' }} src={track.picture_xl} alt={track.name} />
            </Col>
            <Col span={1}>
            </Col>
        </Row>
    );
}

export default InforOfSinger;