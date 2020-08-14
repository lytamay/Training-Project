import React from 'react';
import '../css/Slidebar.css';
import SlidebarItem from './SlideBarItem';
import { Carousel } from 'antd';


function Slidebar(props) {
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <Carousel autoplay>
            <div>
                <SlidebarItem/>
            </div>
            <div>
                <SlidebarItem/>
            </div>
            <div>
                <SlidebarItem/>
            </div>
            <div>
                <SlidebarItem/>
            </div>
        </Carousel>
    )
}

export default Slidebar;