import React from 'react';
import MusicItem from './MusicItem';
import { Row } from 'antd';

function ListMusic(props) {
    const track= props.track
   
    return (
        <Row>
            {track.map((item) => <MusicItem key={item.id} track={item} />)}
        </Row>
    );
}

export default ListMusic;