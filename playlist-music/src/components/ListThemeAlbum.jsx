import React from 'react';
import ChudeAlbum from './ChudeAlbum';
import { Row } from 'antd';

function ListThemeAlbum(props) {
    const span='6'
    return (
        <Row gutter={[16, 16]}>
            <ChudeAlbum span={span} id='103248' />
            <ChudeAlbum span={span} id='103248' />
            <ChudeAlbum span={span} id='103248' />
            <ChudeAlbum span={span} id='103248' />
        </Row>
    );
}

export default ListThemeAlbum;