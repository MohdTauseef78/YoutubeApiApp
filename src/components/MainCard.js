import React from 'react'
import { Card,Spinner } from 'react-bootstrap'

const MainCard = ({selectedVideo}) => {
  if(selectedVideo==undefined) return  <Spinner animation="border" role="status">
  <span className="visually-hidden">Loading...</span>
</Spinner>
const videoSrc =`https://www.youtube.com/embed/${selectedVideo.id.videoId}`
  return (
    <Card>
    
    <iframe src ={videoSrc} width={'100%'} height={'100%'}/>
    <Card.Body>
      <h1>{selectedVideo.snippet.title}</h1>
      <Card.Text>
        {selectedVideo.snippet.description}
        
    
      </Card.Text>
    </Card.Body>
  </Card>
    

  )
}

export default MainCard