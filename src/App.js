import React, { useState } from 'react'
import { Col, Container, Row, } from 'react-bootstrap'
import youtube from './api/youtube'
import MainCard from './components/MainCard'
import Searchbar from './components/Searchbar'
import SideList from './components/SideList'

const App = () => {
  const[videos,setVideos]  = useState([])
  const[selectedVideo,setSelectedVideo] =useState()
  const handleSubmit = async(searchTerm)=>{
    const response = await youtube.get('search',{
      params:{
        part:'snippet',
        maxResults:5,
        key:'AIzaSyDSXofD5Vjp_gDeeG_8DWfXhQo2nSPrtQ0',
        q:searchTerm
      }
    })
    console.log(response.data.items)
    setVideos(response.data.items)

  }
  const onVideoSelect =(video) =>{
    //console.log(video)
    setSelectedVideo(video)

  }
  return (
    <Container>
      <Searchbar handleSubmit={handleSubmit}/>
      <Row>
        <Col sm={8}>
        <MainCard selectedVideo={selectedVideo}/>
        </Col>
        <Col sm={4}>
        <SideList videos={videos} onVideoSelect={onVideoSelect}/>
        </Col>
      </Row>
    </Container>
  
  )
}

export default App