import React from 'react';
import { Row } from 'antd';

function Theme(props) {
    const size=props.fontzize
    const color=props.color

    return (
        <Row style = {{marginBottom : '1px', marginTop: '20px'}}>
            <h3 style = {{color: color, fontSize: size}}>{props.theme}</h3>
        </Row>
    );
}

export default Theme;