import React from 'react';
import { Layout } from 'antd';
import BoxContent from './chung/BoxContent';

function UploadTrack(props) {

    // const handChangeUpload =(e) =>{
    //     let file = e.target.files
    //     let reader = new FileReader()
    //     reader.onload(()=>{
    //         reader.result()
    //     })
    //     reader.readAsText(file)
    //     console.log(reader.readAsText(file));
    // }
    return (
        <Layout>
            <BoxContent  boxWidth ='100%' boxHeight = '300px' boxText='Nhac Tai Len' boxColor='#51258f' colorText='white'/>
            {/* <input type="file" name='upload' onChange={handChangeUpload}/> */}
        </Layout>
    );
}

export default UploadTrack;