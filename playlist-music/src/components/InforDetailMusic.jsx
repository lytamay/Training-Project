import React from 'react';
import { Descriptions } from 'antd';


function InforDetailMusic(props) {
    return (
    <Descriptions style={{border: '3px'}} title="Thong tin bai hat" layout="vertical">
        <Descriptions.Item label="Ten bai hat">Zhou Maomao</Descriptions.Item>
        <Descriptions.Item label="Ten ca sy">My tam</Descriptions.Item>
        <Descriptions.Item label="Nam phat hanh">Hangzhou, Zhejiang</Descriptions.Item>
        <Descriptions.Item label="The loai" span={2}>
          No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
        </Descriptions.Item>
        <Descriptions.Item label="luot xem">empty</Descriptions.Item>
        <Descriptions.Item label="Loi bai hat">Khong co loi bai hat</Descriptions.Item>
    </Descriptions>
    ); 
}

export default InforDetailMusic;