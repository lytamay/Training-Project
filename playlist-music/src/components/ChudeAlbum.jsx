import React, {  useState } from 'react';
import { Card, Col, Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function ChudeAlbum(props) {
    const title = props.title
    const id = props.id
    const src = props.src
    const span = props.span
    const history = useHistory()
    const [playState , setPlayState] = useState(false)
    const [imgWith , setimgWith] = useState('100%')
    const handelMouseOver = () =>{
        setPlayState(true)
        setimgWith('120%')
       
    }
    const handelMouseOut = () =>{
        setPlayState(false)
        setimgWith('100%')
       
    }

    const handelClickToPlayListMusic =()=>{
        history.push(`/chudeAlbum/${id}`)
    }
    return (
        <Col span={span} onClick ={handelClickToPlayListMusic} >
            <Card
                onMouseOver={handelMouseOver}  onMouseOut={handelMouseOut}
                style={{ borderRadius: '10px'}}
                cover={
                    <img
                        style={{ borderRadius: '10px' , width : imgWith }}
                        alt="example"
                        src={src}
                    />
                }
            >
                { playState &&<Button style={{position: 'absolute', top: '60px', alignContent: 'center', alignItems: 'center', marginLeft: '38%' }} icon={ <PlayCircleOutlined />}></Button>}
                <h3>{title}</h3>
            </Card>
        </Col>
    );
}

export default ChudeAlbum;