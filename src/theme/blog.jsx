import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import example from './example.jfif'
import {Container, Row, Col} from 'react-bootstrap'
import gradient from './gradient.jfif'
function Blog(props){
    return <div>
   <Jumbotron style={{backgroundColor:"#00ADB5",color:'white',paddingTop: '50px',
      paddingBottom: '50px',
      height: '150px'}}>
    <h1>What's new?</h1>
  </Jumbotron>;
  <Container >
  <h1>{props.posts.title}</h1>
  <figure  >
        <img  src={example} alt="image"></img>
   
        <figcaption style={{textAlign: 'left', width:'70%', fontFamily: 'sans-serif', fontSize: '18px', marginLeft:'150px', marginTop: '20px' }} >{props.posts.body}
      
        </figcaption>
  </figure>
  </Container>

  </div>
    
}
export default Blog;