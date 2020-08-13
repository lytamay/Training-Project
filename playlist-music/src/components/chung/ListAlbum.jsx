import React from 'react';
import Album from './Album';
import '../../css/ListAlbum.css';
import { useRecoilState } from 'recoil';
import {getAlbumApiState} from '../../state/State';

function ListAlbum(props) {
    const [album , setAlbum ] = useRecoilState(getAlbumApiState)
    const Album = () =>{
        const show = album.map((album) => {
            return (
            <li key={album.id}><Album/> </li>
            )
        })
        return show
    }
    console.log(album)
    return (
        <div className='list-album container-fluid'>
            <ul>
                {Album()}
            </ul>
        </div>
    );
}

export default ListAlbum;