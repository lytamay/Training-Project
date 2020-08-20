import React from 'react';

function BoxContent(props) {
    const boxWidth = props.boxWidth
    const boxHeight = props.boxHeight
    const boxText = props.boxText
    const boxColor = props.boxColor
    const colorText = props.colorText
    return (
        <div style={{textAlign:'center',justifyContent: 'center', alignContent:'center', width: boxWidth, 
        height: boxHeight, background: boxColor, borderRadius: '5px', display: 'flex', marginBottom: '12px',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            <h1 style={{color: colorText, margin: '10%'}}>{boxText}</h1>
        </div>
    );
}

export default BoxContent;