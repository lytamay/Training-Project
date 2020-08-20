import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { getSearchAllState } from '../state/State';
import { getTrackBySearchAll} from '../API/GetListmusicAPI';

function SearchAll(props) {
    const search = props.search
    const [searchAll, setSearchAll] = useRecoilState(getSearchAllState)

    useEffect(()=>{
        getTrackBySearchAll(search).then( res =>{
            const data = res.data.data
            setSearchAll(data)
        }).catch(err => 'khong co du lieu')
    },[search])
    return (
        <div>
           
           d
        </div>
    );
}

export default SearchAll;