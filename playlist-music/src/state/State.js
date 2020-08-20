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

const getSearchAllState = atom({
    key: 'getSearchState',
    default: ''
})

export {logInState, getAlbumApiState, gettrackState,getLoginState,
     getVisibleState,getSearchAllState,getVisibleLogoutState,
     getartistState, getTrackListAlbumState, getTrackListArtistState, inforPersonState};
