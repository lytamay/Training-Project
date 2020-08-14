import React from 'react';
import Album from './Album';
import '../../css/ListAlbum.css';
import { useRecoilState } from 'recoil';
import {getAlbumApiState} from '../../state/State';
import { Row } from 'antd';

function ListAlbum(props) {
    const listAlbum = props.album

    return (
        <Row gutter={10} className='list-album'>
            {listAlbum.map((album, index) => <Album key={album.id} album={album} />)}
        </Row>
    );
}

export default ListAlbum;