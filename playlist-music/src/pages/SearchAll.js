import React from 'react';
import { Layout, Row } from 'antd';
import ListAlbum from '../components/chung/ListAlbum';
import BoxContent from '../components/chung/BoxContent';
import { getSearchTrackState } from '../state/State';
import Theme from '../components/chung/Theme'
import ListMusic from '../components/ListMusic';
import Album from '../components/chung/Album';
import ListSearchAlbum from '../components/ListSearchAlbum';
function SearchAll(props) {
    const track = props.track
    const album = props.album
    if (!track.length) {
        return <BoxContent boxWidth='100%' boxHeight='300px' boxText='Khong co du lieu' boxColor='#51258f' colorText='white' />
    }
    return (
        <Layout>
            <Theme fontzize='30px' corlor='red' theme='Bai hat' />
            <Row>
                <ListMusic track={track} />
            </Row>
            <Theme fontzize='30px' corlor='red' theme='Album' />
                <ListSearchAlbum track={album}  />
               
            <Theme fontzize='30px' corlor='red' theme='Ca sy' />
        </Layout>
    );
}

export default SearchAll;