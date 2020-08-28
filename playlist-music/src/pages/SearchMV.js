import React from 'react';
import BoxContent from '../components/chung/BoxContent';
import Theme from '../components/chung/Theme';
import ListSearchAlbum from '../components/ListSearchAlbum';

function SearchMV(props) {
    const album = props.album
    if (!album.length) {
        return <BoxContent boxWidth='100%' boxHeight='300px' boxText='Khong co du lieu' boxColor='#51258f' colorText='white' />
    }
    return (
        <div>
            <Theme fontzize='30px' corlor='red' theme='Album' />
            <ListSearchAlbum track={album} />
        </div>
    );
}

export default SearchMV;