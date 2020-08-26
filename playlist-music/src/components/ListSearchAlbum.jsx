import React from 'react';
import ChudeAlbum from './ChudeAlbum';
import { Row } from 'antd';

function ListSearchAlbum(props) {
    const track =  props.track
    return (
        <Row gutter={[12, 12]}> 
            {track.map ( item => <ChudeAlbum key = {item.id} src ={item.cover_xl}  title= {item.title} id = {item.id} span={6}/>)}
        </Row>
    );
}

export default ListSearchAlbum;