import React from 'react';
import  '../css/FormLogin.css'
import LoginWithGoogle from '../components/LoginWithGoogle'
import { Modal, Button } from 'antd';
import { useRecoilState } from 'recoil';
import { getLoginState, getVisibleState } from '../state/State';

function FormLogin(props) {
    const [login , setLogin] = useRecoilState(getLoginState)
    const [visible, setVisible] = useRecoilState(getVisibleState)

    const handelCancel = () =>{
        setVisible(false)
    }
    const handelOk = () =>{
        setVisible(false)
    }
    const handelLogin =() =>{
        setVisible(false)
        setLogin(true)
    }
    return (
        <Modal
            width='600px'
            title="Dang Nhap"
            visible={props.visible}
            onCancel={handelCancel}
            onOk={handelOk}
        >
            <h3 style={{marginLeft: '47px'}}>Dang nhap bang tai khoan google</h3>
            <p onClick={handelLogin} style={{marginLeft: "178px"}}><LoginWithGoogle className='loginwithgoogle'/></p>
        </Modal>
    );
}

export default FormLogin;
