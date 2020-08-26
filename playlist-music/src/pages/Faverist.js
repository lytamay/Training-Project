import React, { useState } from 'react';
import { Row, Layout } from 'antd';
import BoxContent from '../components/chung/BoxContent';
import ListAlbum from '../components/chung/ListAlbum';
import ListMusic from '../components/ListMusic';
import DanhSachBaiHat from '../components/DanhSachBaiHat';

function Faverist(props) {
    const [listFaverist , setListFaverist] = useState(JSON.parse(localStorage.getItem('faverist')))
    if(listFaverist===null){
        return <BoxContent  boxWidth ='100%' boxHeight = '300px' boxText='Nhac Yeu Thich Chong' boxColor='#51258f' colorText='white' margin='10px    '/>
    }
    return (
        <Layout>
            <BoxContent  boxWidth ='100%' boxHeight = '300px' boxText='Nhac Yeu Thich' boxColor='#51258f' colorText='white' margin='10px    '/>
            <DanhSachBaiHat track ={listFaverist}/>
        </Layout>
    );
}

export default Faverist;