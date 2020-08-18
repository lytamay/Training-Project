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

export {logInState, getAlbumApiState, gettrackState, getartistState};
