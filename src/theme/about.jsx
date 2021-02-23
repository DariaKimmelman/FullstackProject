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
    <Row style ={{paddingLeft: '0', marginLeft: '0', marginBottom: '15px', marginTop: '15px'}}>
        <Col xs={1}></Col>
        <Col style ={{paddingLeft: '0'}} >
        <img  style={{width:'100%'}}src={davinci} alt=""/></Col>
        <Col >
        <h6 >Leonardo Davinci</h6>
        <p className='left' style={{width: '520px'}}>Leonardo da Vinci (English: /ˌliːəˈnɑːrdoʊ də ˈvɪntʃi, ˌliːoʊˈ-, ˌleɪoʊˈ-/;[a] 14/15 April 1452[b] – 2 May 1519)[4] was an Italian polymath of the High Renaissance who is widely considered one of the most diversely talented individuals ever to have lived.[5] While his fame initially rested on his achievements as a painter, he also became known for his notebooks, in which he made drawings and notes on science and invention; these involve a variety of subjects including anatomy, astronomy, botany, cartography, painting, and palaeontology. Leonardo's genius epitomized the Renaissance humanist idea,[6] and his collective works compose a contribution to later generations of artists rivalled only by that of his contemporary Michelangelo.[7]</p>
        </Col>
    </Row>
    <Row >
        <Col xs={1}></Col>
        <Col >
        <h6 >Vincent Van Gogh</h6>
        <p className='left'style={{width: '520px'}}>Vincent Willem van Gogh (Dutch: [ˈvɪnsənt ˈʋɪləm vɑŋ ˈɣɔx] (About this soundlisten);[note 1] 30 March 1853 – 29 July 1890) was a Dutch post-impressionist painter who posthumously became one of the most famous and influential figures in the history of Western art. In a decade, he created about 2,100 artworks, including around 860 oil paintings, most of which date from the last two years of his life. They include landscapes, still lifes, portraits and self-portraits, and are characterised by bold colours and dramatic, impulsive and expressive brushwork that contributed to the foundations of modern art. He was not commercially successful, and his suicide at 37 came after years of mental illness, depression and poverty.</p>
        </Col>
        <Col >
        <img style={{width:'100%', marginBottom:'10px'}} src={vangogh} alt=""/>
        </Col>
    </Row>
  </Container>
  </div>

}

export default About