import React from 'react';
import { Row, Col, Layout } from 'antd';
import '../css/PlayMusic.css';
import { Spin } from 'antd';

function RunListMusic(props) {
    const album = props.album
    const track = props.track
    const spinImg =  <img src={album.cover_xl} alt={album.title} spin='true' />
    if(!album.artist){
        return null
    }
    const name = album.artist.name
    if(!track){
        return null
    }
   
    return (
        <Layout className='box-playList'>
            <Row className='box-playList-top'>
                <Col span={7}>
                    <div>
                        <img src={album.cover_xl} alt={album.title}/>
                    </div>
                </Col>
                <Col span={12} offset={5} >
                    <div>
                        <div className='smal-img'>
                            <Spin indicator={spinImg} />
                        </div>
                        <div>
                            <h3 style={{color: "white"}}>{track.title_short}</h3>
                        </div> 
                        <div>
                            <h5 style={{color: '#BDBDBD'}}>{name}</h5>
                        </div>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <p style={{color: '#848484'}}> Chua co loi bai hat</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <audio className='playmusic' controls loop>
                    <source src={track.preview}/>
                </audio>
            </Row>
        </Layout>
    );
}

export default RunListMusic;