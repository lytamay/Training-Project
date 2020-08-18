import React from 'react';
import { Descriptions } from 'antd';

function InforDetailMusic(props) {
  const track=props.track

    if(!track.artist){
        return null
    }
  return (
    <Descriptions style={{border: '3px'}} title="Thong tin bai hat" layout="horizontal">
        <Descriptions.Item label="Ten bai hat">{track.title}</Descriptions.Item>
        <Descriptions.Item label="Ten ca sy">{track.artist.name}</Descriptions.Item>
        <Descriptions.Item label="Album">{track.album.title}</Descriptions.Item>
        <Descriptions.Item label="Nam phat hanh">{track.release_date}</Descriptions.Item>
        <Descriptions.Item label="The loai">{track.album.type}</Descriptions.Item>
        <Descriptions.Item label="luot xem">{track.rank}</Descriptions.Item>
        <Descriptions.Item label="Loi bai hat">Khong co loi bai hat</Descriptions.Item>
    </Descriptions>
  ); 
}

export default InforDetailMusic;