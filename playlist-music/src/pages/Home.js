import React from 'react';
import Navbar from '../components/Navbar';

import Slidebar from '../components/Slidebar';
import '../css/Home.css'

function Home(props) {
    return (
        <div className='container-fluid'>
            <Navbar/>
            <div className='container-fluid content'>
                <div className='row'>
                    <div className=' col-8 box-left'>
                        <Slidebar/>
                    </div>
                    <div className='col-4 box-right'>
                        <div>
                            <p>sasa</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;