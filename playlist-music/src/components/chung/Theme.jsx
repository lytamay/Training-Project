import React from 'react';
import { Row } from 'antd';

function Theme(props) {
    return (
        <Row style = {{marginBottom : '1px', marginTop: '20px'}}>
            <h3 style = {{color: 'blue', fontSize: '40px'}}>{props.theme}</h3>
        </Row>
    );
}

export default Theme;