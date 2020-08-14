import React from 'react';
import '../../css/Album.css'
import { Card, Col } from 'antd';

const { Meta } = Card;

function Album(props) {
    const album = props.album
    return (  
        <Col span={4}>
            <Card  hoverable  cover={<img  alt={album.title} src={album.album.cover} />}>
                <Meta title={album.title} description={album.artist.name}/> 
            </Card>
        </Col>
    );
}

export default Album;