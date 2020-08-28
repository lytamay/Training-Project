import React, { useState } from 'react';
import '../../css/Pages.css'

function Pages(props) {
    const [numberPage, setNumberPage] = useState();
    let track = props.track
    if(!track.length){
        return null
    }
    const length = track.length
    // const rateNumber = props.rateNumber
    if (numberPage !== Math.round(length / 5))
        setNumberPage(Math.round(length / 5))
    const Page = () => {
        const page = [];
        for (let i = 1; i <= numberPage; i++) {
            page.push(i)
        }
        const listPage = page.map(index => {
            let link = `#${index}`
            return <a key={index} className="page" href={link}>{index}</a>
        })
        return listPage
    }
    return (
        <div className='container Page'>
            {Page()}
        </div>
    );
}

export default Pages;