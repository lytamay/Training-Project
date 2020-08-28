import React, { useState, useEffect } from 'react';
import '../css/BoxCasi.css'
import { Row, Col } from 'antd';
import { getTrackByTrack } from '../API/GetListmusicAPI';

function BoxCasi(props) {
    const id = props.id
    const [track, setTrack] = useState({})
    useEffect(() => {
        getTrackByTrack(id).then(res => {
            const data = res.data
            setTrack(data)
        })
    }, [])

    if (!track.artist) {
        return null
    }
    const { picture_xl } = track.artist
    const link = `/thong-tin-ca-si/${track.artist.id}`
    return (
        <Row className='box-ca-sy' style={{background: '#1C1C1C', opacity: '0.8'}}>
            <Col span={props.sizeanh}>
                <img src={picture_xl} alt={track.title_short}/>
            </Col>
            <Col span={props.sizetext} offset={1}>
                <h3 style={{fontSize: props.fontSizeTenBaihat}}>
                    <a href="/thong-tin-bai-hat">{track.title}</a>
                </h3>
                <p> 
                    <a style={{fontSize: props.fontSizeTenCasy}} href={link}>{track.artist.name} </a>
                </p>
            </Col>
        </Row>
    );
}

export default BoxCasi;