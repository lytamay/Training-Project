import React from 'react';
import BoxContent from '../components/chung/BoxContent';
import Theme from '../components/chung/Theme';
import ListAlbum from '../components/chung/ListAlbum';

function SearchArtist(props) {
    const artist = props.artist
    if (!artist.length) {
        return <BoxContent boxWidth='100%' boxHeight='300px' boxText='Khong co du lieu' boxColor='#51258f' colorText='white' />
    }
    return (
        <div>
            <Theme fontzize='30px' corlor='red' theme='Ca Si' />
            <ListAlbum span='4' album={artist} />
        </div>
    );
}

export default SearchArtist;