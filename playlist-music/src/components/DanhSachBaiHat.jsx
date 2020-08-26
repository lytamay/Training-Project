import React from 'react';
import BaihatFaverist from './BaihatFaverist';

function DanhSachBaiHat(props) {
    const track = props.track
    return (
        <div>
           {track.map((item , index)=> <BaihatFaverist key={item.id} track={item} number ={index} />)}
        </div>
    );
}

export default DanhSachBaiHat;