const { atom } = require("recoil");

const logInState = atom({
    key : "logInState",
    default : []
})

const getAlbumApiState = atom({
    key:'getAlbumApiState',
    default : []
})

const gettrackState = atom({
    key: 'trackState',
    default:[]
})

const getartistState =atom({
    key : 'artistState',
    default : []
})

const getTrackListAlbumState =atom({
    key: "getTrackListAlbum",
    default: []
})

const getTrackListArtistState =atom({
    key: "getTrackListArtist",
    default: []
})

const getLoginState = atom({
    key: 'getLoginState',
    default: false
})

const getVisibleState = atom({
    key: 'getVisibleState',
    default: false
})

const inforPersonState = atom({
    key: 'inforPersonState',
    default: {}
})

const getVisibleLogoutState = ({
    key: 'getVisibleLogoutState',
    default: false
})

const getSearchAlbumState = atom({
    key: 'getSearchState',
    default: []
})

const getSearchTrackState = atom({
    key: 'getSearchTrackState',
    default: []
})

const getSearchArtistState= atom({
    key:'getSearchArtistState',
    default: []
})

const getListHotNewState= atom({
    key:'getSearchArtistState',
    default: []
})

const getRunMusic = atom({
    key: 'getRunMusic',
    default : []
})
export {logInState, getAlbumApiState, gettrackState,getLoginState,getSearchArtistState,getRunMusic ,
     getVisibleState,getSearchAlbumState,getVisibleLogoutState,getSearchTrackState,getListHotNewState,
     getartistState, getTrackListAlbumState, getTrackListArtistState, inforPersonState};
