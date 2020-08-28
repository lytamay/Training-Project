import React from 'react';
import { Layout, Row, Carousel } from 'antd';
import ListAlbum from '../components/chung/ListAlbum';
import BoxContent from '../components/chung/BoxContent';
import Theme from '../components/chung/Theme'
import ListMusic from '../components/ListMusic';
import ListSearchAlbum from '../components/ListSearchAlbum';
import { useHistory } from 'react-router-dom';
import Pages from '../components/chung/Pages';
import ShowPage from '../components/ShowPageMusicItem';
function SearchAll(props) {
    const track = props.track
    const album = props.album
    const artist = props.artist
    const history = useHistory()
    const handelClickToPlayListMusic =(id)=>{
        history.push(`/chudeAlbum/${id}`)
    }
    if (!track.length) {
        return <BoxContent boxWidth='100%' boxHeight='300px' boxText='Khong co du lieu' boxColor='#51258f' colorText='white'  fontSize='40px' margin='100px'/>
    }
    return (
        <Layout>
            <Carousel autoplay>
            <div>
                <img onClick={()=>handelClickToPlayListMusic('45252981')} src="https://cdns-images.dzcdn.net/images/cover/e393adcff4e78056f9265eeaf00346dc/1000x1000-000000-80-0-0.jpg" alt="" />
            </div>
            <div>
                <img onClick={()=>handelClickToPlayListMusic('121343')} src="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/4/7/6/7/476770a375e34787b6e750d18f857ffb.jpg" alt="" />
            </div>
            <div>
                <img onClick={()=>handelClickToPlayListMusic('121343')} src="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/3/f/c/e/3fce5bceca64b7d191200a93598fff2c.jpg" alt="" />
            </div>
            <div>
                <img onClick={()=>handelClickToPlayListMusic('121343')} src="https://photo-resize-zmp3.zadn.vn/w480_r1x1_jpeg/cover/3/f/c/e/3fce5bceca64b7d191200a93598fff2c.jpg" alt="" />
            </div>
        </Carousel>
            <Theme fontzize='30px' corlor='red' theme='Bai hat' />
            <Row>
                <ListMusic track={track} />
            </Row>
            {/* <ShowPage track={track} {...props}/> */}
            <Pages track={track}/>
            <Theme fontzize='30px' corlor='red' theme='Album' />
            <ListSearchAlbum track={album} />
            <Theme fontzize='30px' corlor='red' theme='Ca sy' />
            <ListAlbum span='4' album={artist} />
        </Layout>
    );
}

export default SearchAll;