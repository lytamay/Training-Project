import React from 'react';
import { Layout, Row, Col } from 'antd';
import Navbar from '../components/Navbar';
import Theme from '../components/chung/Theme';
import Footer from '../components/Footer';
import InforMusic1 from '../components/InforMusic1';
import '../css/DetailMusic.css'
import InforDetailMusic from '../components/InforDetailMusic';
import PlayMusic from '../components/PlayMusic';
// import {PlayMusic} from '../components/PlayMusic'

function DetailMusic(props) {
    const theme=`kang dainel`
    return (
        <Layout>
            <Navbar/>
            <Row>
                <Col offset={1} span={17}>
                   <Theme color='Black' fontzize='30px' theme={theme} />
                    <PlayMusic/>
                   
                   <div className='Box-informusic1'>
                       <InforMusic1/>
                   </div>
                    <div style={{ border: '1px solid gray', paddingTop: '14px' , paddingBottom: '14px' , paddingLeft: '10px'}}>
                        <InforDetailMusic/>
                    </div>
                    <Theme color='Black' fontzize='30px' theme='Bai hat khac' />
                </Col>
                <Col offset={1} span={5}>
                    <p>asas</p>
                </Col>
            </Row>
            <Footer/>
        </Layout>
    );
}

export default DetailMusic;