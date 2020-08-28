import React, { useState } from 'react';
import { Layout, Row, Col } from 'antd';
import BoxContent from '../components/chung/BoxContent';
import { Form, Input, InputNumber, Button } from 'antd';
import Theme from '../components/chung/Theme';

function UserTrack(props) {
    const user = JSON.parse(localStorage.getItem('user')) || []
    // const [userState, setUserState] = useState({})
    if (user === null) {
        return <BoxContent boxWidth='100%' boxHeight='300px' boxText='Khong co du lieu' boxColor='#51258f' colorText='white' fontSize='50px' margin='100px' />
    }
    console.log(user[0].Name);
    return (
        <Layout>
            <Theme theme ='Thong Tin Ca Nhan'/>
            <Form name="nest-messages" >
                <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                  <p>{user[0].Name}</p>
                </Form.Item>
                <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                <p>{user[0].Email}</p>
                </Form.Item>
                <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
                    <InputNumber />
                </Form.Item>
                <Form.Item name={['user', 'website']} label="Website">
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'introduction']} label="Introduction">
                    <Input.TextArea />
                </Form.Item>
            </Form>
        </Layout>
    );
}

export default UserTrack;