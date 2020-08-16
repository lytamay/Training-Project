import React from 'react';
import '../css/Slidebar.css';
import SlidebarItem from './SlideBarItem';
import { Carousel } from 'antd';

function Slidebar(props) {
    const album = props.album
    return (
        <Carousel autoplay>
            {album.map((slideBarItem) =>
                <div>
                   <SlidebarItem key={slideBarItem.id} item={slideBarItem}/>
                </div>
            )} 
              
            {/* <div>
                <SlidebarItem style={contentStyle}/>
            </div>
            <div>
                <SlidebarItem style={contentStyle}/>    
            </div>     */}
        </Carousel>
    )
}

export default Slidebar;