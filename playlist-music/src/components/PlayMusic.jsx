import React from 'react';
import { Row, Col, Layout } from 'antd';
import '../css/PlayMusic.css'

function PlayMusic(props) {
    const track = props.track
    if (!track.album) {
        return null
    }
    const {title,cover_xl} = track.album

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
                            <img shape="circle" src={cover_xl} alt={title}/>
                        </div>
                        <div>

                            <h3 style={{color: "white"}}>Bai hat</h3>
                        </div>
                        <div>
                            <h5 style={{color: '#BDBDBD'}}>Ca si</h5>
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