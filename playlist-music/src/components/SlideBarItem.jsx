import React from 'react';
import '../css/SlideBarItem.css'
function SlidebarItem(props) {
    // const item = props.item
    return (
        <div>
            {/* <img alt={item.title} className='slidebarItem' src={item.album.cover}/> */}
            <img  className='slidebarItem' src="https://avatar-nct.nixcdn.com/slideshow/2020/08/11/d/0/f/3/1597137936184_org.jpg" alt=""/>
        </div>
    );
}

export default SlidebarItem;