const { atom } = require("recoil");

const logInState = atom({
    key : "logInState",
    default : []
})

const getAlbumApiState = atom({
    key:'getAlbumApiState',
    default : []
})

export {logInState, getAlbumApiState};
