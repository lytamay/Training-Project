import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';

function GetListmusicAPI(props) {


    useEffect(
        axios.get('https://shazam.p.rapidapi.com/search')
        .then(res => {
            const data = res.data
        })
    
    )
    return (
        <div>
            
        </div>
    );
}

export default GetListmusicAPI;