import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import SearchAll from './SearchAll';
import SearchTrack from './SearchTrack'
import { Link, useRouteMatch } from 'react-router-dom';
import '../css/Search.css'
import { useRecoilState } from 'recoil';
import { getSearchAlbumState, getSearchTrackState, getSearchArtistState } from '../state/State';
import { getTrackBySearchAll } from '../API/GetListmusicAPI';
import SearchMV from './SearchMV';
import SearchArtist from './SearchArtist';
import BoxContent from '../components/chung/BoxContent';
const { Sider, Content } = Layout;
function Search(props) {
    const search = props.match.params.name
    let { url } = useRouteMatch();
    let query = props.location.search
    const [searchAlbumState, setSearchAlbumState] = useRecoilState(getSearchAlbumState)
    const [searchTrackState, setSearchTrackState] = useRecoilState(getSearchTrackState)
    const [searchArtistState, setSearchArtistState] = useRecoilState(getSearchArtistState)
    useEffect(() => {
        const track = []
        const album = []
        const artist = []
        getTrackBySearchAll(search).then(res => {
            const data = res.data.data
            for (let i = 0; i < data.length; i++) {
                if (data[i].title.match(/[search]/g) !== null) {
                    track.push(data[i])
                }
                if (data[i].artist.name.match(/[search]/g) !== null) {
                    const check = artist.find(artist => artist.name === data[i].artist.name)
                    if (!check) {
                        artist.push(data[i])
                    }
                }
                if (data[i].album.title.match(/[search]/g) !== null) {
                    const check = album.find(album => album.title === data[i].album.title)
                    if (!check) {
                        album.push(data[i].album)
                    }
                }
            }
            setSearchTrackState(track)
            setSearchArtistState(artist)
            setSearchAlbumState(album)
        }).catch(err => 'khong co du lieu')
    }, [search])
    const showSearch = (query) => {
        if (query === '?all' || query === '') return <SearchAll track={searchTrackState} album={searchAlbumState} artist={searchArtistState} />
        if (query === '?bai-hat') return <SearchTrack track={searchTrackState}/>
        if (query === '?mv') return <SearchMV album={searchAlbumState}/>
        if (query === '?nghe-si') return <SearchArtist artist={searchArtistState}/>
    }
    return (
        <Layout>
            <Navbar />
            <BoxContent boxWidth='100%' boxHeight='106px' boxText='Khong co du lieu' boxColor='#51258f' colorText='white'  fontSize='40px' margin='100px'/>
            <Layout>
                <Sider trigger={null} collapsible>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1"  active>
                            <Link to={`${url}?all`}>Tat Ca </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to={`${url}?bai-hat`}>Bai Hat </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to={`${url}?nghe-si`}>Nghe si</Link>
                        </Menu.Item>
                        <Menu.Item key="4" >
                            <Link to={`${url}?mv`}> MV </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content className="site-layout-background" style={{ margin: '24px 16px', padding: 24, minHeight: 280, }}>
                        {showSearch(query)}
                    </Content>
                </Layout>
            </Layout>
            <Footer />
        </Layout>
    );
}

export default Search;