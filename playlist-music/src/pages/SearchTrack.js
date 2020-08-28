import React, { useState } from 'react';
import { Layout } from 'antd';
import ListAlbum from '../components/chung/ListAlbum';
import BoxContent from '../components/chung/BoxContent';
import { useRecoilState } from 'recoil';
import { getSearchTrackState } from '../state/State';
import ListMusic from '../components/ListMusic';

function SearchTrack(props) {
    const track = props.track
    const [searchTrackState, setSearchTrackState] = useState([])

    const show = () =>{
        if(track.length === 0) return <BoxContent  boxWidth ='100%' boxHeight = '300px' boxText='Khong co du lieu' boxColor='#51258f' colorText='white'/>
        else {
            return <ListMusic track={track}/>
        }
    }
    return (
        <Layout>
            <BoxContent  boxWidth ='100%' boxHeight = '70px' boxText='Tat ca cac bai hat duoc tim thay' boxColor='#51258f' colorText='white' fontSize='30px' margin='15px'/>
            {show()}
        </Layout>
    );
}

export default SearchTrack;