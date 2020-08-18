import axios from 'axios';

const host = "deezerdevs-deezer.p.rapidapi.com"
const key = "9fd6c939aamsh5f72768d77a1559p1dd2d7jsnf23f80d8315a"

const getTrackBySearch = () =>{
    return(axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?redirect_uri=http%253A%252F%252Fguardian.mashape.com%252Fcallback&q=eminem&index=25'))
} 

const  getTrackByTrack = (id) => {
    return axios.get(`https://deezerdevs-deezer.p.rapidapi.com/track/`+ id, {
        headers: {
            "x-rapidapi-host" : host,
            "x-rapidapi-key" : key
        }
    })
}

const getTrackByArtist = () => {
    return axios.get("https://deezerdevs-deezer.p.rapidapi.com/artist/%7Bid%7D", {
        headers: {
            "x-rapidapi-host" : host,
            "x-rapidapi-key" : key
        }
    })
}

const getTrackByAlbum = () => {
    return axios.get("https://deezerdevs-deezer.p.rapidapi.com/album/677684", {
        headers: {
            "x-rapidapi-host" : host,
            "x-rapidapi-key" : key
        }
    })
}

const getTrackByEditorial = () => {
    return axios.get("https://deezerdevs-deezer.p.rapidapi.com/album/677684", {
        headers: {
            "x-rapidapi-host" : host,
            "x-rapidapi-key" : key
        }
    })
}

const getTrackByPlaylist = () => {
    return axios.get("https://deezerdevs-deezer.p.rapidapi.com/playlist/%7Bid%7D", {
        headers: {
            "x-rapidapi-host" : host,
            "x-rapidapi-key" : key
        }
    })
}

const getTrackByRadio = () => {
    return axios.get("https://deezerdevs-deezer.p.rapidapi.com/radio/%7Bid%7D", {
        headers: {
            "x-rapidapi-host" : host,
            "x-rapidapi-key" : key
        }
    })
}

const getTrackByInfos= () => {
    return axios.get("https://deezerdevs-deezer.p.rapidapi.com/infos", {
        headers: {
            "x-rapidapi-host" : host,
            "x-rapidapi-key" : key
        }
    })
}

export {getTrackBySearch,  getTrackByTrack,
    getTrackByArtist, getTrackByAlbum, getTrackByEditorial,
    getTrackByPlaylist,getTrackByRadio, getTrackByInfos };

