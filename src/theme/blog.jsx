import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import example from './example.jfif'
import {Container, Row, Col} from 'react-bootstrap'
import gradient from './gradient.jfif'
function Blog(){
    return <div>
   <Jumbotron style={{backgroundColor:"turquoise"}}>
    <h1>What's new?</h1>
  </Jumbotron>;
  <Container >
  <h1>La la la</h1>
  <figure  >
        <img  src={example} alt="image"></img>
   
        <figcaption style={{textAlign: 'left', maxWidth:'45rem', fontFamily: 'sans-serif', fontSize: '18px', marginLeft:'170px', marginTop: '20px' }} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto labore adipisci alias inventore, quos saepe nemo modi, deleniti itaque laboriosam et cupiditate error non porro natus? Labore possimus veniam hic.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti modi fugiat illo, porro ipsam et, vel quasi sapiente fugit est iste deserunt quaerat quibusdam culpa saepe cupiditate iure cum dolores!
        </figcaption>
  </figure>
  </Container>

  </div>
    
}
export default Blog;