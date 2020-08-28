import Navbar from '../components/Navbar';
import { Layout, Row, Col } from 'antd';
import Theme from '../components/chung/Theme';
import React, { useEffect, useState } from 'react';
import ChudeHot from '../components/ChudeHot';
import Footer from '../components/Footer';
import { Tabs } from 'antd';
import ListMusic from '../components/ListMusic';
import { getTrackBySearchAll } from '../API/GetListmusicAPI';
import Pages from '../components/chung/Pages';
import AmNhacTheoChuDe from '../components/AmNhacTheoChuDe';

const { TabPane } = Tabs;

function Baihat(props) {

    const [listHotState, setListHotState] = useState([])
    const [listNewState, setListNewState] = useState([])
    const [trackHotNewDate, setTrackHotNewDate] = useState([])
    useEffect(() => {
        getTrackBySearchAll('just ').then((res) => {
            const data = res.data.data
            setListHotState(data)
        })
        getTrackBySearchAll('bts').then((res) => {
            const data = res.data.data
            setListNewState(data)
        })
    }, [])

    console.log(trackHotNewDate);
    return (
        <Layout>
            <Navbar />
            <Row className="content">
                <Col className="group-content-left" offset={1} span={17}>
                    <Theme color='red' fontzize='40px' theme='Nhac hot nhat' />
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Hot music" key="1">
                            <Theme color='red' fontzize='40px' theme='Nhac hot nhat' />
                            <ListMusic track={listHotState} />
                            {/* <ShowPage track={listHotState}{...props}/> */}
                            <Pages track={listHotState} />
                        </TabPane>
                        <TabPane tab="New music" key="2">
                            <Theme color='black' fontzize='40px' theme='Nhac moi nhat' />
                            <ListMusic track={listNewState} />
                            <Pages track={listHotState} />
                        </TabPane>
                    </Tabs>
                </Col>
                <Col className="group-content-right" offset={1} span={5}>
                    <Theme fontzize='20px' color='black' theme='Ca si hot' />
                    <Theme fontzize='20px' color='black' theme='Chu de hot' />
                    <ChudeHot theme="Nhac Han" background='#d8bd14' />
                    <Row>
                        <AmNhacTheoChuDe key='47902552' id='47902552' span={24} size='16px' />
                    </Row>
                    <Row gutter={[16, 16]}>
                        <AmNhacTheoChuDe key=' 92735082' id=' 92735082' size='12px' span={12} />
                        <AmNhacTheoChuDe key='47902522' id='47902522' span={12} size='12px' />
                    </Row>
                    <ChudeHot theme="Nhac Au My" background='#1765ad' />
                    <Row>
                        <AmNhacTheoChuDe key='47902552' id='47902552' span={24} size='16px' />
                    </Row>
                    <ChudeHot theme="Nhac Viet" background='#58181c' />
                    <Row>
                        <AmNhacTheoChuDe id=' 1610436' span={24} size='16px'/>
                    </Row>
                    <ChudeHot theme="Nhac Trung" background='#d8bd14' />
                    <Row>
                        <AmNhacTheoChuDe key='144823282' id='144823282' span={24} size='16px' />
                    </Row>
                    <ChudeHot theme="Nhac Nhat" background='#642ab5' />
                    <Row>
                        <AmNhacTheoChuDe key='160615152' id='160615152'span={24} size='16px'/>
                    </Row>
                </Col>
            </Row>
            <Footer />
        </Layout>
    );
}

export default Baihat;