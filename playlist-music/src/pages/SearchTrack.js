import React, { useState } from 'react';
import { Layout } from 'antd';
import ListAlbum from '../components/chung/ListAlbum';
import BoxContent from '../components/chung/BoxContent';
import { useRecoilState } from 'recoil';
import { getSearchTrackState } from '../state/State';

function SearchTrack(props) {
    const search = props.search

    // const [searchTrackState, setSearchTrackState] = useRecoilState(getSearchTrackState)
    const [searchTrackState, setSearchTrackState] = useState([])

    // if(search.length !==0){
    //     // for(let i = 0 ;i< search.length; i++){
    //     //     if(i%2){
    //     //         // let tam =[...searchTrackState]
    //     //         // tam.push(search[i])
    //     //         // setSearchTrackState(tam)

    //     //     }
    //     // }
    // }

    const show = () =>{
        if(search.length === 0) return <BoxContent  boxWidth ='100%' boxHeight = '300px' boxText='Khong co du lieu' boxColor='#51258f' colorText='white'/>
        else {
            return <ListAlbum span='8' album={search}/>
        }
    }
    return (
        <Layout>
            <h1>search Track</h1>
            {show()}
        </Layout>
    );
}

export default SearchTrack;