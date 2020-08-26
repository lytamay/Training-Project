import axios from 'axios';

const host = "deezerdevs-deezer.p.rapidapi.com"
const key = "9fd6c939aamsh5f72768d77a1559p1dd2d7jsnf23f80d8315a"

const getTrackBySearch = () =>{
    return (axios.get('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?redirect_uri=http%253A%252F%252Fguardian.mashape.com%252Fcallback&q=eminem&index=25'))
} 
const getTrackBySearchAll = (search) =>{
    return (axios.get(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`,{
        headers: {
            "x-rapidapi-host" : host,
            "x-rapidapi-key" : key
        }
    }))
} 

const  getTrackByTrack = (id) => {
    return axios.get(`https://deezerdevs-deezer.p.rapidapi.com/track/`+ id, {
        headers: {
            "x-rapidapi-host" : host,
            "x-rapidapi-key" : key
        }
    })
}

const getTrackByArtist = (id) => {
    return axios.get("https://deezerdevs-deezer.p.rapidapi.com/artist/" + id, {
        headers: {
            "x-rapidapi-host" : host,
            "x-rapidapi-key" : key
        }
    })
}

const getTrackByAlbum = (id) => {
    return axios.get("https://deezerdevs-deezer.p.rapidapi.com/album/" + id, {
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

const getTrackByTrackListAlbum = (track) => {
    return axios.get('https://cors-anywhere.herokuapp.com/' + track, {
        headers: {
            "x-rapidapi-host" : host,
            "x-rapidapi-key" : key
        }
    })
}

const getTrackByComment= () => {
    return axios.get("https://deezerdevs-deezer.p.rapidapi.com/comment/67239342", {
        headers: {
            "x-rapidapi-host" : host,
            "x-rapidapi-key" : key
        }
    })
}

const getAutoComplete= () => {
    return axios.get("https://shazam.p.rapidapi.com/search?locale=en-US&offset=0&limit=5&term=kiss%20the%20rain", {
        headers: {
            "x-rapidapi-host": "shazam.p.rapidapi.com",
            "x-rapidapi-key": "9fd6c939aamsh5f72768d77a1559p1dd2d7jsnf23f80d8315a"
        }
    })
}

export {getTrackBySearch,  getTrackByTrack, getTrackByTrackListAlbum,getTrackByComment,
    getTrackByArtist, getTrackByAlbum, getTrackByEditorial,getTrackBySearchAll,
    getTrackByPlaylist,getTrackByRadio, getTrackByInfos, getAutoComplete };

