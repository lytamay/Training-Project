import React from 'react';
import { Layout } from 'antd';
import ListAlbum from '../components/chung/ListAlbum';
import BoxContent from '../components/chung/BoxContent';

function SearchAll(props) {
    const search = props.search
    const show = () =>{
        if(search.length === 0) return <BoxContent  boxWidth ='100%' boxHeight = '300px' boxText='Khong co du lieu' boxColor='#51258f' colorText='white'/>
        else {
            return <ListAlbum span='4' album={search}/>
        }
    }
    return (
        <Layout>
            {show()}
        </Layout>
    );
}

export default SearchAll;