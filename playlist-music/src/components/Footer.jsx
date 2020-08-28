import React from 'react';
import { Row, Col, Layout } from 'antd';
import '../css/Footer.css';
import Theme from './chung/Theme';

function Footer(props) {
    return (
        <Layout>
            <Row>
                <Col span={1}>
                </Col>
                <Col span={22}>
                    <Theme theme='Lien ket va hop tac' />
                    {/* <hr style={{border: '1px solid gray'}}/> */}
                    <Row gutter={[30]}>
                        <Col span={4}>
                            <img class="t-img-coop" src="https://stc-id.nixcdn.com/v11/images/footer/2.png" alt="" />
                        </Col>
                        <Col span={4}>
                            <img class="t-img-coop" src="https://stc-id.nixcdn.com/v11/images/footer/1.png" alt="" />
                        </Col>
                        <Col span={4}>
                            <img class="t-img-coop" src="https://stc-id.nixcdn.com/v11/images/footer/5.png" alt="ifind" />
                        </Col>
                        <Col span={4}>
                            <img class="t-img-coop" src="https://stc-id.nixcdn.com/v11/images/footer/4.png" alt="" />
                        </Col>
                        <Col span={4}>
                            <img class="t-img-coop" src="https://stc-id.nixcdn.com/v11/images/footer/3.png" alt="" />
                        </Col>
                        <Col span={4}>
                            <img class="t-img-coop" src="https://stc-id.nixcdn.com/v11/images/footer/2.png" alt="" />
                        </Col>
                    </Row>
                    <hr style={{border: '0.5px solid gray'}}/>
                    <Row gutter={[30]}>
                        <Col span={8}>
                            <Theme theme='HO TRO' />
                            <Row>
                                <Col span={12}>
                                    <p>Tro giup</p>
                                    <p>Chinh sach bao mat</p>
                                    <p>Lien he quang cao</p>
                                </Col>
                                <Col span={12}>
                                    <p>So do</p>
                                    <p>NCCT</p>
                                    <p>Thoa thuat su dung</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={8}>
                            <Theme theme='SAN PHAM KHAC' />
                            <Row>
                                <Col span={12}>
                                    <p>Mobile App</p>
                                    <p>Mobile Web</p>
                                    <p>Smart TV</p>
                                    <p>Desktop</p>
                                </Col>
                                <Col span={12}>
                                    <p>Dich vu 3G</p>
                                    <p>NCCT Corp</p>
                                    <p>Tuyen dung</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={8}>
                            <Theme theme='LIEN HE' />
                            <Row>
                                <Col span={3}>
                                    <img class="ic_tsocial" src="https://stc-id.nixcdn.com/v11/images/footer/t_ic_facebook.png" alt="facebook" />
                                </Col>
                                <Col span={3}>
                                    <a href="https://www.instagram.com/Nhaccuatui/" rel="nofollow" target="_blank" title="Instagram"><img class="ic_tsocial last" src="https://stc-id.nixcdn.com/v11/images/footer/t_ic_instagram.png" alt="" /></a>

                                </Col>
                                <Col span={15}>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={8}>
                                    <img class="ic_tdownload" src="https://stc-id.nixcdn.com/v11/images/footer/t_google_play.png" alt="" />
                                </Col>
                                <Col span={8}>
                                    <img class="ic_tdownload" src="https://stc-id.nixcdn.com/v11/images/footer/t_app_store.png" alt="" />
                                </Col>
                                <Col span={8}>
                                    <img class="ic_tdownload last" src="https://stc-id.nixcdn.com/v11/images/footer/t_appgallery.png" alt="" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={1}>
                </Col>

            </Row>
            <footer style={{ marginTop: 12, background: '#111d2c', color: "white", padding: 20 }}>
                <Row>
                    <Col span={20}>
                        <span className='adress'>
                            <a href="#"><img style={{ height: 20, width: 20 }} src="https://image.flaticon.com/icons/svg/149/149064.svg" alt="adrees" /><span> Toa nha Nam Anh so 2 ngo 63 le duc tho My Dinh 2</span></a>
                            <a href="#"><img style={{ height: 20, width: 20 }} src="https://image.flaticon.com/icons/svg/732/732200.svg" alt="email" /><span> thegioinhac@gmail.com</span></a>
                            <a href="#"><img style={{ height: 20, width: 20 }} src="https://image.flaticon.com/icons/svg/733/733585.svg" alt="phone-number" /><span> 0565323848</span></a>
                            <a href="#"><img style={{ height: 20, width: 20 }} src="https://image.flaticon.com/icons/svg/145/145802.svg" alt="ket-noi-face-book" />FaceBook</a>
                        </span>
                    </Col>
                    <Col span={4}>
                        <span>© NCT Corp. All rights reserved</span>
                    </Col>
                </Row>
            </footer>
        </Layout>
    );
}

export default Footer;