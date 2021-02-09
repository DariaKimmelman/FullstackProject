import React from 'react';
import {Navbar, Nav, Form, FormControl, NavDropdown, Button, Container} from 'react-bootstrap';
import ReactDOM from 'react-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.png';


function Header(){
    return <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home"><img src= {logo}  alt="logo" height="60" width="140"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#home">About</Nav.Link>
        <Nav.Link href="#link">Blog</Nav.Link>
        <NavDropdown title="Catalog" id="basic-nav-dropdown"  >
        <Container >
          <Row >
           
            <Col>
              <h4>Category 1</h4>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </Col>
            <Col>
              <h4>Category 2</h4>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              </Col>
          
            </Row>
            </Container>
        </NavDropdown>
        
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Nav.Link href="#home">Login</Nav.Link>
        <Nav.Link href="#link">Join</Nav.Link>
        <Nav.Link href="#link"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
    </Navbar.Collapse>
  </Navbar>

}

export default Header;