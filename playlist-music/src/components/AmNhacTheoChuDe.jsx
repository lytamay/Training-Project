import React, {  useState, useEffect } from 'react';
import { Card, Col, Button } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { getTrackByAlbum } from '../API/GetListmusicAPI';

function AmNhacTheoChuDe(props) {
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
        <Col span={span} onClick ={handelClickToPlayListMusic} >
            <Card
                onMouseOver={handelMouseOver}  onMouseOut={handelMouseOut}
                style={{ borderRadius: '10px'}}
                cover={
                    <img
                        style={{ borderRadius: '10px' , position:'relative', width : imgWith }}
                        alt="example"
                        src={track.cover_xl}
                    />
                }
            >
                { playState &&<Button style={{position: 'absolute', top: '36%', alignContent: 'center', alignItems: 'center', marginLeft: '38%' }} icon={ <PlayCircleOutlined />}></Button>}
                <h4 style={{fontStyle: 'italic' , fontSize: size}}>{track.title}</h4>
            </Card>
        </Col>
    );
}

export default AmNhacTheoChuDe;