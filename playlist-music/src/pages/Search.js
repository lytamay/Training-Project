import React, { useEffect } from 'react';
import { Layout,Menu } from 'antd';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {UserOutlined, VideoCameraOutlined, UploadOutlined} from '@ant-design/icons';
import SearchAll from './SearchAll';
import SearchTrack from './SearchTrack'
import { Link, useRouteMatch} from 'react-router-dom';
import '../css/Search.css'
import { useRecoilState } from 'recoil';
import { getSearchAllState, getSearchTrackState, getSearchArtistState } from '../state/State';
import { getTrackBySearchAll } from '../API/GetListmusicAPI';
import Item from 'antd/lib/list/Item';

const { Sider, Content } = Layout;

function Search(props) {
    const search = props.match.params.name
    let {url} = useRouteMatch();
    let query = props.location.search
    const [searchAll, setSearchAll] = useRecoilState(getSearchAllState)
    const [searchTrackState, setSearchTrackState] = useRecoilState(getSearchTrackState)
    const [searchArtistState, setSearchArtistState] = useRecoilState(getSearchArtistState)
    useEffect(()=>{
       getTrackBySearchAll(search).then( res =>{
            const data = res.data.data
            setSearchAll(data)
        }).catch(err => 'khong co du lieu')
    },[search])

    const SpliceTrack = () =>{
        const resault = searchAll.map((item, index)=>{
            if(/[search]/g.test(item.title)){
                setSearchTrackState(item)
            }
            if(/[search]/g.test(item.artist)){
                setSearchArtistState(item)
            }
        })
        return resault
    }

    console.log(searchTrackState);


    const showSearch = (query) =>{
        if (query ==='?all'|| query ==='') return <SearchAll search={searchAll}/>
        if (query ==='?bai-hat') return <SearchTrack search={search}/>
    }
    return (
        <Layout>
            <Navbar/>
            <Layout>
                <Sider trigger={null} collapsible>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />} active>
                        <Link to={`${url}?all`}>Tat Ca </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                        <Link to={`${url}?bai-hat`}>Bai Hat </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />}>
                        <Link to={`${url}?nghe-si`}>Nghe si</Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<UploadOutlined />}>
                        <Link to={`${url}?mv`}> MV </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                <Content className="site-layout-background" style={{margin: '24px 16px', padding: 24, minHeight: 280,}}>
                   {showSearch(query)}
                   {SpliceTrack()}
                </Content>
            </Layout>
        </Layout>
        <Footer/>
    </Layout>
    );
}

export default Search;