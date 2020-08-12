import React from 'react';
import '../css/Slidebar.css';
import SlidebarItem from './SlideBarItem';


function Slidebar(props) {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div>
                    <img className='sildbarImg' src="https://avatar-nct.nixcdn.com/slideshow/2020/08/11/d/0/f/3/1597137936184_org.jpg" alt=""/>
                </div>
                <div className ='row '>
                    <div className='col-3'>
                        <SlidebarItem className='slideItem'/>
                    </div>
                    <div className='col-3'>
                        <SlidebarItem className='slideItem'/>
                    </div>
                    <div className='col-3 '>
                        <SlidebarItem className='slideItem'/>
                    </div>
                    <div className='col-3 '>
                        <SlidebarItem className='slideItem'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slidebar;