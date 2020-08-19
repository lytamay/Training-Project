import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {getTrackListAlbumState} from '../state/State'
import ListAlbum from '../components/chung/ListAlbum';
import {getTrackByTrackListAlbum} from '../API/GetListmusicAPI';

function BoxMusic(props) {
    const [trackListAlbumState, setTrackListAlbumState] = useRecoilState(getTrackListAlbumState)
    
    useEffect( () =>{
        getTrackByTrackListAlbum(props.trackList).then( res => {
            const data = res.data.data
            setTrackListAlbumState(data)
        })
    }, [])

    return (
        <div>
            <ListAlbum span='4' album={trackListAlbumState}/>
        </div>
    );
}

export default BoxMusic;