import React from 'react';
import { Row, Col, Button } from 'antd';
import InforCasy from './InforCasy';
import {HeartOutlined,VerticalAlignBottomOutlined,ShareAltOutlined } from '@ant-design/icons';


function InforMusic1(props) {

    return (
    <Row style={{alignItems: 'center', alignContent: 'center'}}>
        <Col span={12}>
            <InforCasy track={props.track} sizeanh='3' sizetex='20' fontSizeTenBaihat='15px' fontSizeTenCasy='10px'/>
        </Col>
        <Col span={12}>
            <div style={{float:"right"}}>
                <Button icon={<HeartOutlined />}>Them vao</Button>
                <Button icon={<VerticalAlignBottomOutlined />}>Download</Button>
                <Button icon={<ShareAltOutlined />}>Chia se</Button>
            </div>
        </Col>
    </Row> 
    );
}

export default InforMusic1;