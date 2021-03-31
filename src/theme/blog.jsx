import {React, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {Jumbotron} from 'react-bootstrap'
import example from './example.jfif'
import {Container, Row, Col} from 'react-bootstrap'
import gradient from './gradient.jfif'
import * as api from '../api'
function Blog(props){
   const {id} = useParams()
   const [post, setPost] = useState({})
   useEffect(async()=>{
		const article = await api.getById('posts', id);
		setPost(article.data[0])
		console.log(article.data);

	}, [])
  let devUrl = `http://localhost:3001/images/${post.image}`



    
    return <div>
   <Jumbotron style={{backgroundColor:"#00ADB5",color:'white',paddingTop: '50px',
      paddingBottom: '50px',
      height: '150px'}}>
    <h1>What's new?</h1>
  </Jumbotron>;
  <Container >
  <h1>{post.title}</h1>
  <figure  >
        <img  src={devUrl} alt="image"></img>
   
        <figcaption style={{textAlign: 'left', width:'80%', fontFamily: 'sans-serif', fontSize: '18px', marginLeft:'150px', marginTop: '20px', whiteSpace: "pre-wrap" }} >{post.content}
      
        </figcaption>
  </figure>
  </Container>

  </div>
    
}
export default Blog;