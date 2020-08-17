import React from 'react';
import { Row, Col,Button } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import '../css/Footer.css';

function Footer(props) {
    return (
        <footer style={{marginTop:12, background: '#138585', color: "white", padding: 20}}>
            <Row>
                <Col span={20}>
                    <span className='adress'>
                        <a href="#"><img style={{height: 20, width: 20}} src="https://image.flaticon.com/icons/svg/149/149064.svg" alt="adrees"/><span> Toa nha Nam Anh so 2 ngo 63 le duc tho My Dinh 2</span></a>
                        <a href="#"><img style={{height: 20, width: 20}} src="https://image.flaticon.com/icons/svg/732/732200.svg" alt="email"/><span> thegioinhac@gmail.com</span></a>
                        <a href="#"><img style={{height: 20, width: 20}} src="https://image.flaticon.com/icons/svg/733/733585.svg" alt="phone-number"/><span> 0565323848</span></a>
                        <a href="#"><img style={{height: 20, width: 20}} src="https://image.flaticon.com/icons/svg/145/145802.svg" alt="ket-noi-face-book"/>FaceBook</a>
                    </span>
                </Col>
                <Col span={4}>
                    <span>NTC</span>
                </Col>
            </Row>
        </footer>
    );
}

export default Footer;