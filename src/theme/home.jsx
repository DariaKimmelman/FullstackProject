import React from 'react'
import background from './background.jpg'
import{Jumbotron, CardDeck, Button, Row, Col} from 'react-bootstrap'
import './home.css'
import decor from './decor.jfif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'

function MainPage(){
    return <div><Jumbotron id='header' style={{paddingTop:'0', paddingRight: '0', paddingBottom: '0'}} >
        <Row>
            <Col xs="1">
            </Col>
        <Col>
        <h1 >Welcome to E Gallery</h1>
        <Button style={{marginLeft: '150px', marginTop: '15px'}} variant="danger">Shop now</Button> 
        </Col>
        <Col xs="7">
        <img style={{width: '100%', maxHeight: '150px', paddingTop:'0'}} src={decor} alt=""/>
        </Col>
       
        </Row>
        
    </Jumbotron>
    <Row>
        
        <Col className= 'style'>
        <FontAwesomeIcon icon= {faImage} size= '2x'></FontAwesomeIcon>
        <h6>Authentic, hand crafted art</h6>
        <p>Shop original, unique and affordable art.</p>
        </Col>
        <Col className= 'style' style={{paddingLeft: '25px'}}>
        <FontAwesomeIcon icon= {faUserAlt} size= '2x'></FontAwesomeIcon>
        <h6>Support independent artists</h6>
        <p>Buy directly from the artists, helping them make a living doing what they love.</p>
        </Col>
        <Col className= 'style'>
        <FontAwesomeIcon icon= {faTruck} size= '2x'></FontAwesomeIcon>
        <h6>Risk-free shopping</h6>
        <p>Secure transaction. Full peace of mind guaranteed.</p>
        </Col>
    </Row>
    </div>

}

export default MainPage
