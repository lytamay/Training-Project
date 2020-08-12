const { atom } = require("recoil");

const logInState = atom({
    key : "logInState",
    default : []
})

export {logInState};
