import React from 'react'
import {Jumbotron, Container, Row, Col} from 'react-bootstrap'
import './about.css'
import background  from './background.jpg'
import davinci from './davinci.jfif'
function About(){
    return <div><Jumbotron id= "header">
    <h1>About Us</h1>
    
  </Jumbotron>
  <Container>
    <Row>
        <Col xs={2}></Col>
        <Col >
        <img src={davinci} alt=""/></Col>
        <Col>
        <h6>Leonardo Davinci</h6>
        <p>Leonardo da Vinci (English: /ˌliːəˈnɑːrdoʊ də ˈvɪntʃi, ˌliːoʊˈ-, ˌleɪoʊˈ-/;[a] 14/15 April 1452[b] – 2 May 1519)[4] was an Italian polymath of the High Renaissance who is widely considered one of the most diversely talented individuals ever to have lived.[5] While his fame initially rested on his achievements as a painter, he also became known for his notebooks, in which he made drawings and notes on science and invention; these involve a variety of subjects including anatomy, astronomy, botany, cartography, painting, and palaeontology. Leonardo's genius epitomized the Renaissance humanist idea,[6] and his collective works compose a contribution to later generations of artists rivalled only by that of his contemporary Michelangelo.[7]</p>
        </Col>
    </Row>
  </Container>
  </div>

}

export default About