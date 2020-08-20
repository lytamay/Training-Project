import React from 'react';
import  '../css/FormLogin.css'
import LoginWithGoogle from '../components/LoginWithGoogle'
import { Modal } from 'antd';
import { useRecoilState } from 'recoil';
import { getLoginState, getVisibleState } from '../state/State';


function FormLogout(props) {
    const [login , setLogin] = useRecoilState(getLoginState)
    const [visible, setVisible] = useRecoilState(getVisibleState)
    // const [visibleOut, setVisibleOut] = useRecoilState(getVisibleLogoutState)

    const handelCancel = () =>{
        setVisible(false)
    }
    const handelOk = () =>{
        setLogin(false)
        setVisible(false)
    }
    return (
        <Modal
            width='600px'
            title="Dang Nhap"
            visible={props.visible}
            onCancel={handelCancel}
            onOk={handelOk}
        >
            <h3 style={{marginLeft: '47px'}}>Ban chac chan muon dang nhap</h3>
        </Modal>
    );
}

export default FormLogout;