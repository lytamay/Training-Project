import React, { useState } from 'react';
import { Row, Col, Button } from 'antd';
import { CaretRightOutlined, HeartFilled } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { handelAddListFaverist } from '../HandelAddListFaverist';

function BaihatFaverist(props) {
    const number = props.number + 1
    const track = props.track
    const [backgroundState, setBackgroundState] = useState('#1a1325')
    const history = useHistory()
    const handelMouseOver = () => {
        setBackgroundState('#ab7ae0')
    }
    const handelMouseOut = () => {
        setBackgroundState('#1a1325 ')
    }
    const handelToDetail = () => {
        const link = `/detail-music/${track.id}`
        history.push(link)
    }
    let music = JSON.parse(localStorage.getItem('faverist')) || []
    const isFaverist = music.findIndex(value => value.id === track.id) === -1 ? '#8bbb11' : 'red'
    return (
        <Row justify="space-around" onMouseOver={handelMouseOver} onMouseOut={handelMouseOut} style={{
            background: backgroundState, color: 'white', alignContent: 'center', alignItems: 'center',
            paddingTop: '12px', paddingBottom: '12px', justifyContent: 'center', borderBottom: '1px solid white', borderRadius: '5px'
        }}>
            <Col span={1} offset={1}>
                <p>{number}</p>
            </Col>

            <Col span={10}>
                <p >{track.title}</p>
            </Col>
            <Col span={7}>
                <p>{track.rank}</p>
            </Col>

            <Col span={1} offset={2}>
                <Button onClick={handelToDetail} icon={<CaretRightOutlined />}></Button>
            </Col>
            <Col span={2}>
                <Button style={{ color: isFaverist }} onClick={() => handelAddListFaverist(track)} icon={<HeartFilled />}></Button>
            </Col>
        </Row>
    );
}

export default BaihatFaverist;