import React, { useState } from 'react';
import { Row, Layout } from 'antd';
import BoxContent from '../components/chung/BoxContent';
import DanhSachBaiHat from '../components/DanhSachBaiHat';

function Faverist(props) {
    const [listFaverist , setListFaverist] = useState(JSON.parse(localStorage.getItem('faverist')))
    if(listFaverist===null){
        return <BoxContent  boxWidth ='100%' boxHeight = '300px' boxText='Nhac Yeu Thich Trong' boxColor='#51258f' colorText='white' margin='100px '/>
    }
    return (
        <Layout>
            <BoxContent  boxWidth ='100%' boxHeight = '300px' boxText='Nhac Yeu Thich' boxColor='#51258f' colorText='white' margin='100px    '/>
            <DanhSachBaiHat track ={listFaverist}/>
        </Layout>
    );
}

export default Faverist;