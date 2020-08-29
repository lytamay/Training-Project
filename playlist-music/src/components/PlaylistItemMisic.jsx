import React, { useState } from 'react';
import { Row, Col, Button } from 'antd';
import { CaretRightOutlined, HeartFilled} from '@ant-design/icons';

function PlaylistItemMisic(props) {
    const number = props.number + 1
    const track = props.track
    const [backgroundState , setBackgroundState] = useState('#301c4d')
    const handelMouseOver =() =>{
        setBackgroundState('#ab7ae0')
    }
    const handelMouseOut =() =>{
        setBackgroundState('#301c4d')
    }    
    const handelRun = () =>{
        setBackgroundState('#51258f')
        props.onChange(track)
    }
    const handelAddListFaverist =()=>{
        const music = JSON.parse(localStorage.getItem('faverist'))|| []
        if(music.findIndex(value => value.id === track.id) === -1){
            const tam = {
                id : track.id,
                title : track.title,
                rank : track.rank
            }
            music.push(tam)
        } else {
            music.splice( music.findIndex( value => value.id === track.id), 1)
        }
        localStorage.setItem('faverist',JSON.stringify(music))
    }
    let music = JSON.parse(localStorage.getItem('faverist'))|| []
    const isFaverist = music.findIndex(value => value.id === track.id) === -1 ? 'gray1' : 'red' 
    return (
        <Row justify="space-around" onMouseOver={handelMouseOver} onMouseOut={handelMouseOut} style={{background: backgroundState, color: 'white' , alignContent: 'center', alignItems: 'center', 
        paddingTop: '12px', paddingBottom:'12px', justifyContent:'center', borderBottom:'1px solid white', borderRadius:'5px'}}>
            <Col span={1} offset={1}>
                <p>{number}</p>
            </Col>

            <Col span={10}>
                <p >{track.title}</p>
            </Col>
            <Col span={7}>
                <p>{track.rank}</p>
            </Col>

            <Col span={1} offset={2}>
                <Button onClick={handelRun} icon={<CaretRightOutlined />}></Button>
            </Col>
            <Col span={2}>
                <Button style={{color: isFaverist}} onClick={handelAddListFaverist} icon={<HeartFilled/>}></Button>
            </Col>
        </Row>
    );
}

export default PlaylistItemMisic;