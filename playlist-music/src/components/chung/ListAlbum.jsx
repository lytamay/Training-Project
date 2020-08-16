import React from 'react';
import Album from './Album';
import '../../css/ListAlbum.css';
import { Row } from 'antd';

function ListAlbum(props) {
    const listAlbum = props.album
    const span=props.span

    return (
        <Row gutter={10} className='list-album'>
            {listAlbum.map((album, index) => <Album key={album.id} album={album} span={span} />)}
        </Row>
    );
}

export default ListAlbum;