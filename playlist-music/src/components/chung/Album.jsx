import React from 'react';
import '../../css/Album.css'
import { Card, Col } from 'antd';

function Album(props) {
    const album = props.album
    const span=props.span
    const link = `/detail-music/${album.id}`
    
    return (  
        <Col span={span}>
            <Card  className='cart-music' hoverable  cover={<a href={link}><img  alt={album.title} src={album.album.cover_xl}  /></a>}>
                <div>
                    <a href="/thong-tin-bai-hat">{album.title}</a>
                </div>
                <div>
                    <a href='link'>{album.artist.name}</a>
                </div>
            </Card>
        </Col>
    );
}

export default Album;