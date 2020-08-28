import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Slidebar from '../components/Slidebar';
import '../css/Home.css'
import ListAlbum from '../components/chung/ListAlbum';
import { useRecoilState } from 'recoil';
import { getAlbumApiState } from '../state/State';
import {  getTrackBySearchAll } from '../API/GetListmusicAPI';
import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Theme from '../components/chung/Theme';
import Pages from '../components/chung/Pages'
import Footer from '../components/Footer';
import AmNhacTheoChuDe from '../components/AmNhacTheoChuDe';
import BoxContent from '../components/chung/BoxContent';
import ListMusic from '../components/ListMusic';
import { Carousel } from 'antd';
import BoxCasi from '../components/BoxCasi';
import ShowPage from '../components/ShowPageMusicItem';
import ShowPageAlbum from '../components/ShowPageAlbum';

function Home(props) {
    const [albumState, setAlbumState] = useRecoilState(getAlbumApiState)

    useEffect(() => {
        getTrackBySearchAll('i love                                                                                                                                             ')
            .then(res => {
                const data = res.data.data
                setAlbumState(data)
            }).catch(err => console.log(err))
    }, [])
    return (
        <Layout>
            <Navbar />
            <Row className="content">
                <Col className="group-content-left" offset={2} span={20}>
                    <Theme theme='AlBum noi bat nhat' fontSize='70px'/>
                    <Slidebar />
                    <Theme theme='Nghe gi hom nay' />
                    
                    <Row gutter={[16, 16]}>
                        <AmNhacTheoChuDe id='99719862' span={6} />
                        <AmNhacTheoChuDe id='168524752' span={6} />
                        <AmNhacTheoChuDe id='127247792' span={6} />
                        <AmNhacTheoChuDe id='145022202' span={6} />
                    </Row>
                    <Row gutter={[16, 16]}>
                        <AmNhacTheoChuDe key='145421942' id='145421942' span={4} />
                        <AmNhacTheoChuDe key='45754692' id='45754692' span={4} />
                        <AmNhacTheoChuDe key='157841452' id='157841452' span={4} />
                        <AmNhacTheoChuDe key='131874432' id='131874432' span={4} />
                        <AmNhacTheoChuDe key='135491242' id='135491242' span={4} />
                        <AmNhacTheoChuDe key='168999282' id='168999282' span={4} />
                    </Row>

                    <AmNhacTheoChuDe id='148314202' />
                    {/* <ListAlbum span='4' album={albumState} /> */}
                    {/* <Row gutter={10}>
                       
                        <ShowPageAlbum span='4' track ={albumState} {...props}/>
                        
                    </Row> */}
                    {/* <Pages track={albumState}/> */}
                    {/* <ListThemeAlbum/> */}
                    <Theme theme='Nhac quoc te' />
                    <Row gutter={[16, 16]}>
                        <AmNhacTheoChuDe id=' 168871152' span={6} />
                        <AmNhacTheoChuDe id=' 1610436' span={6} />
                        <AmNhacTheoChuDe id='94125292' span={6} />
                        <AmNhacTheoChuDe id='44881061' span={6} />
                    </Row>
                    <Row gutter={[16, 16]}>
                        <AmNhacTheoChuDe id='15579230' span={8} />
                        <AmNhacTheoChuDe id='7787471' span={8} />
                        <AmNhacTheoChuDe id='110044' span={8} />
                    </Row>
                    {/* <ListAlbum span='4' album={albumState}/> */}
                    <a href='/MV-hot'><Theme theme='MV hot>' /></a>
                    <Row gutter={[10, 10]}>
                        <Col span={12}>
                            <AmNhacTheoChuDe id='83871942' span={24} />
                        </Col>
                        <Col span={6}>
                            <div>
                                <AmNhacTheoChuDe id='92671452' span={24} size='12px' />
                            </div>
                            <div>
                                <AmNhacTheoChuDe id='11700216' span={24} size='12px' />                            </div>
                        </Col>
                        <Col span={6}>
                            <div>
                                <AmNhacTheoChuDe id='12580340' span={24} size='12px' />                            </div>
                            <div>
                                <AmNhacTheoChuDe id='124149' span={24} size='12px' />                            </div>
                        </Col>
                    </Row>
                    <Theme theme='The loai' />
                    <Row gutter={[12, 12]}>
                        <Col span={6}>
                            <BoxContent boxWidth='100%' boxHeight='50px' boxText='Nhac Viet' boxColor='rgba(184, 79, 124, 0.5)' colorText='white' fontSize='20px' margin='10px' />
                        </Col>
                        <Col span={4}>
                            <BoxContent boxWidth='100%' boxHeight='50px' boxText='Nhac Han' boxColor='rgba(255, 123, 0, 0.5)' colorText='white' fontSize='20px' margin='10px' />
                        </Col>
                        <Col span={4}>
                            <BoxContent boxWidth='100%' boxHeight='50px' boxText='Nhac Au My' boxColor='rgba(0, 206, 12, 0.5)' colorText='white' fontSize='20px' margin='10px' />
                        </Col>
                        <Col span={4}>
                            <BoxContent boxWidth='100%' boxHeight='50px' boxText='Nhac Thieu Nhi' boxColor='rgba(201, 76, 76, 0.5)' colorText='white' fontSize='20px' margin='10px' />
                        </Col>
                        <Col span={6}>
                            <BoxContent boxWidth='100%' boxHeight='50px' boxText='Nhac Trung Quoc' boxColor='rgba(0, 2, 76, 0.5)' colorText='white' fontSize='20px' margin='10px' />
                        </Col>
                    </Row>
                    <Theme theme='Nha Tre' />
                    <Row gutter={[16, 16]}>
                        <AmNhacTheoChuDe key='157110312' id='157110312' span={6} />
                        <AmNhacTheoChuDe key='63688512' id='63688512' span={6} />
                        <AmNhacTheoChuDe key='9116754002' id='116754002' span={6} />
                        <AmNhacTheoChuDe key=' 117634072' id=' 117634072' span={6} />
                    </Row>
                    <Theme theme='Nha Thieu Nhi' />
                    <Row gutter={[16, 16]}>
                        <AmNhacTheoChuDe key=' 169476242' id=' 169476242' span={6} />
                        <AmNhacTheoChuDe key='109475942' id='109475942' span={6} />
                        <AmNhacTheoChuDe key='120729192' id='120729192' span={6} />
                        <AmNhacTheoChuDe key='11614476' id='11614476' span={6} />
                    </Row>
                    <Theme theme='Nha Han' />
                    <Row gutter={[16, 16]}>
                        <AmNhacTheoChuDe key='47902552' id='47902552' span={6} />
                        <AmNhacTheoChuDe key='159769722' id='159769722' span={6} />
                        <AmNhacTheoChuDe key=' 92735082' id=' 92735082' span={6} />
                        <AmNhacTheoChuDe key='47902522' id='47902522' span={6} />
                    </Row>
                    <Theme theme='Nhac Au My' />
                    <Row gutter={[16, 16]}>
                        <AmNhacTheoChuDe key='118976302' id='118976302' span={6} />
                        <AmNhacTheoChuDe key=' 53401272' id=' 53401272' span={6} />
                        <AmNhacTheoChuDe key=' 166325982' id=' 166325982' span={6} />
                        <AmNhacTheoChuDe key=' 42543161' id=' 42543161' span={6} />
                    </Row>
                    <Theme theme='Nhac Trung Quoc' />
                    <Row gutter={[16, 16]}>
                        <AmNhacTheoChuDe key='145421942' id='145421942' span={6} />
                        <AmNhacTheoChuDe key='144823282' id='144823282' span={6} />
                        <AmNhacTheoChuDe key='99719862' id='99719862' span={6} />
                        <AmNhacTheoChuDe key='114203712' id='114203712' span={6} />
                    </Row>
                    <Theme theme='Nhac nhat' />
                    <Row gutter={[16, 16]}>
                        <AmNhacTheoChuDe key='112552372' id='112552372' span={6} />
                        <AmNhacTheoChuDe key='160615152' id='160615152' span={6} />
                        <AmNhacTheoChuDe key=' 98020932' id='98020932' span={6} />
                        <AmNhacTheoChuDe key='184564232' id='84564232' span={6} />
                    </Row>


                    <Theme theme='Ca si hot' />
                    <Row gutter={[16, 16]}>
                        <AmNhacTheoChuDe key='106837762' id='106837762' span={6} />
                        <AmNhacTheoChuDe key='150642612' id='150642612' span={6} />
                        <AmNhacTheoChuDe key=' 70959742' id=' 70959742' span={6} />
                        <AmNhacTheoChuDe key='10269046' id='10269046' span={6} />
                    </Row>
                    <Theme theme='Kham pha' />
                    <Carousel autoplay>
                        <div>
                            <BoxCasi id='728458082' sizeanh='10' sizetex='14' fontSizeTenBaihat='40px' fontSizeTenCasy='50px' />
                        </div>
                        <div>
                            <BoxCasi id='6982223' sizeanh='10' sizetex='14' fontSizeTenBaihat='40px' fontSizeTenCasy='50px' />
                        </div>
                        <div>
                            <BoxCasi id='879263612' sizeanh='10' sizetex='14' fontSizeTenBaihat='40px' fontSizeTenCasy='50px' />
                        </div>
                        <div>
                            <BoxCasi id='704047132' sizeanh='10' sizetex='14' fontSizeTenBaihat='40px' fontSizeTenCasy='50px' />
                        </div>
                    </Carousel>
                    <Theme theme='Bai hat moi nhat' />
                    {/* <ListMusic track={albumState} /> */}
                    
                    <ShowPage track={albumState}{...props}/>
                    <Pages track={albumState}/>
                    
                </Col>
                <Col span={2}>
                </Col>
            </Row>
            <Footer />
        </Layout>
    );
}

export default Home;