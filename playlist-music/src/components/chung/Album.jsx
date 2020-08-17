import React from 'react';
import '../../css/Album.css'
import { Card, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

function    Album(props) {
    const album = props.album
    const span=props.span
    return (  
        <Col span={span}>
            <Card  hoverable  cover={<img  alt={album.title} src={album.album.cover}  className='cart'/>}>
                <div>
                    <a href="/thong-tin-bai-hat">{album.title}</a>
                </div>
                <div>
                    <a href='/thong-tin-ca-si'>{album.artist.name}</a>
                </div>
            </Card>
        </Col>
    );
}

export default Album;