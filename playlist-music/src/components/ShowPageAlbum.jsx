import React from 'react';
import Album from '../components/chung/Album';
import { Row } from 'antd';

function ShowPageAlbum(props) {
    const span = props.span
    let track = props.track
    const tam = []
    const showListMusic = () => {
        let crpage = props.location.hash
        if (crpage != null) {
            crpage = crpage.slice(1)
        }
        const Show = track.map((track, index) => {
            if (crpage !== '') {
                if ((index >= (crpage - 1) * 5) && (index < 5 * crpage)) {
                    tam.push(track)
                }
            }
            else {
                while (index < 5) {
                    tam.push(track)
                }
            }
           {tam.map( track =>{
               return <Album key={track.id} album={track} span={span} />
           })}
        })
        return Show
    }
    return (
        <div>
            {showListMusic()}
        </div>
    );
}
export default ShowPageAlbum;