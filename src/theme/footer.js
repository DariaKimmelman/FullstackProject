import React from 'react';
import {Navbar, Nav, Form, FormControl, NavDropdown, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
function Footer(){
    return <Navbar bg="dark" expand="lg" variant = 'dark' fixed='bottom'>
    
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">Contact Us</Nav.Link>
        <Nav.Link href="#home"><FontAwesomeIcon icon={faFacebook} size="2x"/></Nav.Link>
        <Nav.Link href="#home"><FontAwesomeIcon icon={faTwitterSquare}  size="2x"/></Nav.Link>
        <Nav.Link href="#home"><FontAwesomeIcon icon={faInstagramSquare}  size="2x"/></Nav.Link>
        
        
      </Nav>
      <p style ={{color:"white", marginTop:"auto", fontSize:"8px"}}>  © All Rights Reserved</p>
    </Navbar.Collapse>
  </Navbar>

}

export default Footer;