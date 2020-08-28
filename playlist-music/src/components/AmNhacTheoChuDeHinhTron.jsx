import React, {  useState, useEffect } from 'react';
import { Card, Col, Button, Row } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { getTrackByAlbum } from '../API/GetListmusicAPI';

function AmNhacTheoChuDeHinhTron(props) {
    const id = props.id
    const size = props.size
    const span = props.span
    const history = useHistory()
    const [playState , setPlayState] = useState(false)
    const [track , setTrack] = useState([])
    const [imgWith , setimgWith] = useState('100%')
    useEffect( ()=>{
        getTrackByAlbum(id).then( (res)=>{
            const data = res.data
            setTrack(data)
        })
    }, [])
    const handelMouseOver = () =>{
        setPlayState(true)
        setimgWith('90%')
       
    }
    const handelMouseOut = () =>{
        setPlayState(false)
        setimgWith('100%')
       
    }

    const handelClickToPlayListMusic =()=>{
        history.push(`/chudeAlbum/${id}`)
    }
    return (
        <Row style={{border: '1px solid gray', alignContent:'center', alignItems:'center', backgroundColor:'rgba(201, 76, 76, 0.3)'}}>
            <Col offset={2} span={14} onClick ={handelClickToPlayListMusic} >
            <div
                onMouseOver={handelMouseOver}  onMouseOut={handelMouseOut}
                style={{ borderRadius: '60%'}}
                cover={
                    <img
                        style={{ borderRadius: '50%' , width : imgWith }}
                        alt="example"
                        src={track.cover_xl}
                    />
                }
            >
                { playState &&<Button style={{position: 'absolute', top: '60px', alignContent: 'center', alignItems: 'center', marginLeft: '38%' }} icon={ <PlayCircleOutlined />}></Button>}
                {/* <h4 style={{fontStyle: 'italic' , fontSize: size}}>{track.title}</h4> */}
            </div>
            </Col>
            <Col offset={2} span={6}>
                <p style={{fontStyle: 'italic' , fontSize: size}}>{track.title}</p>
            </Col>

        </Row>
    );
}

export default AmNhacTheoChuDeHinhTron;