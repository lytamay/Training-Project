import React from 'react';
import '../../css/Album.css'

function Album(props) {
    // const album = props.album
    // console.log(album);
    return (
        <li>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            <div className='box-left-album'>
                <a href="#">
                    <div className='bg-action-info'>
                        <span className='view-listen'>
                            <span className='icon-listen'></span>
                            <span className='rank'>55485</span>
                        </span>
                        <span className='iconPlay'></span>
                    </div>    
                    <span className='avata'>
                        <img src="https://avatar-nct.nixcdn.com/playlist/2020/08/12/e/d/9/a/1597221451565_300.jpg" alt="s"/>
                    </span>
                </a>
            </div>
            <div className='info-album'>
                <h3><a href="https://www.nhaccuatui.com/playlist/indie-viet-hay-nhat-2020-va.DGeuvnTTIFYV.html">ten album</a></h3>
                <h4> <a href="https://www.nhaccuatui.com/nghe-si-huynh-tu.html">ten ca si</a></h4>
            </div>
        </li>
    );
}

export default Album;