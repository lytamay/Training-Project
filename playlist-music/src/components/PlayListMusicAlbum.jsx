import React from 'react';
import MusicItem from './MusicItem';
import Album from './chung/Album';
import PlaylistItemMisic from './PlaylistItemMisic';
import { useRecoilState } from 'recoil';
import { getRunMusic } from '../state/State';

function PlayListMusicAlbum(props) {
    const track = props.track
    const onChange = (track)=>{
        props.onChange(track)
    }
    return (
        <div>
            {track.map((item, index) => <PlaylistItemMisic onChange={onChange} key={item.id} number={index} track={item} />)}
        </div>
    );
}

export default PlayListMusicAlbum;