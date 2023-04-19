import React from 'react'
import { Col, Row,Card } from 'react-bootstrap'

const VideoDetail = ({video,onVideoSelect}) => {
  console.log(video)
  return (
    <Row>
      <Col sm={4} style={{marginTop:20}}>
      <Card.Img variant="top" src={video.snippet.thumbnails.high.url} onClick={()=>{
        onVideoSelect(video)
      }} />
      </Col>
      <Col  sm={8}>
      <Card.Text>
      {video.snippet.channelTitle}
      </Card.Text>
      <Card.Text>
      {video.snippet.description}
      </Card.Text>
      </Col>
    </Row>
  )
}

export default VideoDetail