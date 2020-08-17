import React from 'react';
import MusicItem from './MusicItem';
import { Row } from 'antd';

function ListMusic(props) {
    return (
        <div>
            <MusicItem/>
            <MusicItem/>
            <MusicItem/>
        </div>
    );
}

export default ListMusic;