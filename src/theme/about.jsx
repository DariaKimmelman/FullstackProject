import React from 'react'
import {Jumbotron, Container, Row, Col} from 'react-bootstrap'
import './about.css'
import background  from './background.jpg'
import davinci from './davinci.jfif'
import vangogh from './vangogh.jfif'

function About(){
    return <div><Jumbotron id= "header2" style={{paddingTop: '50px',
      paddingBottom: '50px',
      height: '150px'}}>
    <h1>About Us</h1>
    
  </Jumbotron >
  <Container fluid style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', justifyContent: 'center'}}> 
    <Row style ={{paddingLeft: '0', marginLeft: '0', marginBottom: '15px', marginTop: '0'}}>
        <Col xs={1}></Col>
        <Col style ={{paddingLeft: '0'}} >
        <img  style={{width:'100%'}}src={`http://localhost:3001/images/dad.jpg`} alt=""/></Col>
        <Col >
        <h6 >Yefim Eftimiopulos</h6>
        <p className='left' style={{width: '520px'}}>Yefim was born in Uzbekistan in 1962. Has technical education. Was interested in art since early childhood. Began painting at age of 33. Was inspired by metaphysical works of Giorgio Chirico and Rene Magritte. The artist does not consider his works to be strictly artistic, but only a reflection of inner feelings. He considers the main thing in the visual arts: theme, plot and composition.
Therefore, his paintings will be of interest to those viewers who have a penchant for thinking and unraveling obscure symbols.

</p>
        </Col>
    </Row>
    <Row >
        <Col xs={1}></Col>
        <Col >
        <h6 >Victoria Fertman</h6>
        <p className='left'style={{width: '520px'}}>Victoria was born in Uzbekistan in 1964. She has a university degree in the humanities. During her student years she studied in a theater studio, where she met her future husband. Since childhood, she drew a lot.
She began to paint seriously at the age of 50, with a preference for watercolors and acrylics. Diversity of hobbies affects the choice of subjects for her work.</p>
        </Col>
        <Col >
        <img style={{width:'100%', marginBottom:'10px'}} src={`http://localhost:3001/images/mom.jpg`} alt=""/>
        </Col>
    </Row>
  </Container>
  </div>

}

export default About