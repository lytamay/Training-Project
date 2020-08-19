import React from 'react';
import { Layout, Row, Col } from 'antd';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Theme from '../components/chung/Theme';

function InforPersonal(props) {
    return (
        <Layout>
            <Navbar/>
            <Row className="content">
                <Col className="group-content-left" offset={1} span={17}>
                    <Theme theme='Moi phat hanh'/>
                </Col>
                <Col className ="group-content-right" offset={1} span={5}>
                    <Theme theme='Moi phat hanh'/>
                </Col>
            </Row>
            <Footer/>
        </Layout>
    );
}

export default InforPersonal;