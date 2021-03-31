import React from 'react'
import{Card} from 'react-bootstrap'
import example from '../example.jfif'
import {LinkContainer} from 'react-router-bootstrap'
import './BlogCard.css'

function BlogCard(props){
  let postTitle = props.posts.title;
  let devUrl = `http://localhost:3001/images/${props.posts.image}`
    
    return <LinkContainer onClick={()=>props.onClickOnPost(props.posts.id)} style={{padding:'20px'}} to={`/Blog/${props.posts.id}`}><Card className= 'cardmargin' >
  <Card.Img  style ={{maxHeight: "none"}} variant="top" src= {devUrl} />
  <Card.Body style={{padding:'0'}} >
    <Card.Title >{props.posts.title}</Card.Title>
  </Card.Body>
</Card>
</LinkContainer>

}

export default BlogCard