import React from 'react';
import '../css/Slidebar.css';
import { Carousel } from 'antd';
import { useHistory } from 'react-router-dom';

function Slidebar(props) {
    const history = useHistory()
    const handelClickToPlayListMusic =(id)=>{
        history.push(`/chudeAlbum/${id}`)
    }
    return (
        <Carousel autoplay>
            <div>
                <img onClick={()=>handelClickToPlayListMusic('121343')} src="https://avatar-nct.nixcdn.com/slideshow/2020/08/11/d/0/f/3/1597137936184_org.jpg" alt="" />
            </div>
            <div>
                <img onClick={()=>handelClickToPlayListMusic('121343')} src="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/4/7/6/7/476770a375e34787b6e750d18f857ffb.jpg" alt="" />
            </div>
            <div>
                <img onClick={()=>handelClickToPlayListMusic('121343')} src="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/3/f/c/e/3fce5bceca64b7d191200a93598fff2c.jpg" alt="" />
            </div>
            <div>
                <img onClick={()=>handelClickToPlayListMusic('121343')} src="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/3/f/c/e/3fce5bceca64b7d191200a93598fff2c.jpg" alt="" />
            </div>
        </Carousel>
    )
}

export default Slidebar;