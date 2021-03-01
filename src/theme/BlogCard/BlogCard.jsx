import React from 'react'
import{Card} from 'react-bootstrap'
import example from '../example.jfif'
import {LinkContainer} from 'react-router-bootstrap'
import './BlogCard.css'

function BlogCard(props){
  let postTitld = props.posts.title;
    
    return <LinkContainer onClick={()=>props.onClickOnPost(props.posts.id)} style={{padding:'20px'}} to="/Blog"><Card className= 'cardmargin' >
  <Card.Img variant="top" src= {example} />
  <Card.Body style={{padding:'0'}} >
    <Card.Title >{props.posts.title}</Card.Title>
  </Card.Body>
</Card>
</LinkContainer>

}

export default BlogCard