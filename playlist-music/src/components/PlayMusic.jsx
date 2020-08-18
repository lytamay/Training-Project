import React from 'react';
import { Row, Col, Layout } from 'antd';
import '../css/PlayMusic.css';
import { Spin } from 'antd';

function PlayMusic(props) {
    const track = props.track
    if (!track.album) {
        return null
    }
    const {title,cover_xl} = track.album
    const spinImg =  <img src={cover_xl} alt={title} spin='true' />

    return (
        <Layout className='box-playList'>
            <Row className='box-playList-top'>
                <Col span={7}>
                    <div>
                        <img src={cover_xl} alt={title}/>
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
                            <h5 style={{color: '#BDBDBD'}}>{track.artist.name}</h5>
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

export default PlayMusic;