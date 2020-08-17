import React from 'react';
import { Layout, Row } from 'antd';
import Navbar from '../components/Navbar';
import InforOfSinger from '../components/InforOfSinger';

function Singer(props) {
    return (
        <Layout>
            <Navbar/>
            <InforOfSinger/>
        </Layout>
    );
}

export default Singer;