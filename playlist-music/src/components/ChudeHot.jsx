import React from 'react';
import { Row } from 'antd';

function ChudeHot(props) {
    return (
        <div style={{background: props.background, width: '100%', height: '100px'}}>
            <h3 style={{color: 'white' , paddingTop: '30px', paddingLeft: '20px'}}>{props.theme}</h3>
        </div>
    );
}

export default ChudeHot;