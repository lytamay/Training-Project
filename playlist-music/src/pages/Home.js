import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Slidebar from '../components/Slidebar';
import '../css/Home.css'
import ListAlbum from '../components/chung/ListAlbum';
import { useRecoilState } from 'recoil';
import {getAlbumApiState} from '../state/State';
import {getListmusicAPIBySearch} from '../API/GetListmusicAPI';
import axios from 'axios';

function Home(props) {
    const [albumState, setAlbumState] = useRecoilState(getAlbumApiState)

    useEffect( () =>{
        getListmusicAPIBySearch()
        .then( res => {
            const data = res.data.data
            setAlbumState(data)
        }).catch (err => console.log(err))
    },[])

    return (
        <div className='container-fluid'>
            <Navbar/>
            <div className='container-fluid content'>
                <div className='row'>
                    <div className=' col-8 box-left'>
                        {/* <Slidebar/> */}
                        <ListAlbum/>
                    </div>
                    <div className='col-4 box-right'>
                        <div>
                            <p>sasa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;