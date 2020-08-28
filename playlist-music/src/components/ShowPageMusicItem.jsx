import React, { useState } from 'react';
import MusicItem from './MusicItem';


function ShowPage(props) {
    // const MusicItem = props.MusicItem
    let track = props.track
    if(!track.length){
        return null
    }
    const showListMusic = () => {
        let crpage=props.location.hash
        if(crpage != null){
            crpage=crpage.slice(1)
        }  
        const Show = track.map((track,index) =>{
            if(crpage!== ''){
                if((index>=(crpage-1)*5) && (index<5*crpage)){
                    return (
                         <div key={index}><MusicItem key={track.id} track={track} /></div>
                    )
                }
            }
            else{
                while(index < 5){
                    return (
                        <div key={index}><MusicItem key={track.id} track={track} /></div>
                    )
                }
            }
         })
         return Show
    }
    return (
        <div>
            {showListMusic()}
        </div>
    );
}
export default ShowPage;