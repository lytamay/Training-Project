import React from 'react';
import { Row, Col, Layout } from 'antd';
import '../css/PlayMusic.css'
import {MoreOutlined} from '@ant-design/icons';

function PlayMusic(props) {
    return (
        <Layout className='box-playList'>
            <Row className='box-playList-top'>
                <Col span={7}>
                    <div>
                        <img src="https://avatar-nct.nixcdn.com/playlist/2015/05/17/f/d/7/c/1431859486138.jpg" alt=""/>
                    </div>
                </Col>
                <Col span={12} offset={5} >
                    <div>
                        <div className='smal-img'>
                            <img shape="circle" src="https://avatar-nct.nixcdn.com/playlist/2015/05/17/f/d/7/c/1431859486138.jpg" alt=""/>
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
                    <source src='https://cdns-preview-7.dzcdn.net/stream/c-70df68f339e46dea6329efa2867495fe-15.mp3'/>
                </audio>
            </Row>
        </Layout>
    );
}

export default PlayMusic;