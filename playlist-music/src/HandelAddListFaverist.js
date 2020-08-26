const handelAddListFaverist = (track) => {
    const music = JSON.parse(localStorage.getItem('faverist')) || []
    if (music.findIndex(value => value.id === track.id) === -1) {
        const tam = {
            id: track.id,
            title: track.title,
            rank: track.rank
        }
        music.push(tam)
    } else {
        music.splice(music.findIndex(value => value.id === track.id), 1)
    }
    localStorage.setItem('faverist', JSON.stringify(music))
}

export {handelAddListFaverist};