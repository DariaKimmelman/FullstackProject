import React, { useEffect } from 'react'
import background from './background.jpg'
import{Jumbotron, CardDeck, Button, Row, Col, Modal} from 'react-bootstrap'
import './home.css'
import decor from './decor.jfif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import MainCard from './mainPageCard.jsx'
import mona from './monaLisa.jpg'
import girl from './girlwithpearl.jpg'
import night from './starrynight.jpg'
import {LinkContainer} from 'react-router-bootstrap'
import {useState} from 'react'

function MainPage(props){
    let paintings = props.paintings;

let [show, setShow] = useState(true);
useEffect(()=>{
   
     if(sessionStorage.getItem('status')){
         setShow(false)
    }
    
},[])
    function toCard(item, index){
        return <MainCard onClickOnCard = {props.onClickOnCard} key={index} paintings={item}></MainCard>
    }
    function topRated(a, b) {
        return a.name.rating - b.name.rating;
        
    }
    let sorted;
    if(paintings.length <= 5){
       sorted = paintings.sort(topRated);
    }
    else{
        sorted = paintings.sort(topRated).slice(0, 5);  
    }
    
    const handleClose = () => {setShow(false);
       
        sessionStorage.setItem('status', true);
    }
    

    const handleShow = () =>{setShow(true);}
    
    
    

    
    
    
    
    

    return <div id="body" className= 'dark'>
        <Modal id="modal" style={{backgroundColor:'black'}}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header style={{backgroundColor:'#ebe8e5'}}>
          <Modal.Title>It's dark here...</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor:'#ebe8e5'}}>
          Please turn on the light.
        </Modal.Body>
        <Modal.Footer style={{backgroundColor:'#ebe8e5'}}> 
        <Button variant="danger" style={{marginTop: "0", marginLeft: '15px'}} onClick = {handleClose}><FontAwesomeIcon icon= {faPowerOff}/></Button>
          
        </Modal.Footer>
      </Modal>

        <Jumbotron id='header' style={{paddingTop:'0', paddingRight: '0', paddingBottom: '0', paddingLeft:'5px'}} >
        <Row>
            <Col xs="1">
            </Col>
        <Col>
        <h1 >Welcome to E Gallery</h1>
        <LinkContainer to="/AllProducts"><Button style={{marginLeft: '150px',  marginTop:'30px', marginBottom: '10px'}} variant="danger">Shop now</Button></LinkContainer> 
        
        </Col>
        <Col xs="7">
        <img style={{width: '100%', maxHeight: '150px', paddingTop:'0'}} src={decor} alt=""/>
        
        </Col>
       
        </Row>
        
    </Jumbotron>
    <Row style={{marginLeft:'72px'}}>
        
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
    <h1 className= 'dark'>Top Rated</h1>
    
    <CardDeck style={{backgroundImage: `url(${background})`, backgroundSize:'cover', paddingLeft:'250px'}}>{sorted.map(toCard)}</CardDeck>

    </div>

}

export default MainPage
