import axios from 'axios';

const getListmusicAPIBySearch = () =>{
    return(axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?redirect_uri=http%253A%252F%252Fguardian.mashape.com%252Fcallback&q=eminem&index=25'))
} 

export {getListmusicAPIBySearch};
