import React from 'react'
import VideoDetail from'./VideoDetail'
import { Card,Spinner } from 'react-bootstrap'

const SideList = ({videos,onVideoSelect}) => {
  if(videos.length===0)return  <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>

  
  return (
    videos.map((item,idx)=> <VideoDetail key={idx} video={item} onVideoSelect={onVideoSelect}/>)
  )
}

export default SideList