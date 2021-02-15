import React from 'react';
import {Navbar, Nav, Form, FormControl, NavDropdown, Button, Container} from 'react-bootstrap';
import ReactDOM from 'react-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.png';
import './header.css'
import { propTypes } from 'react-bootstrap/esm/Image';
import {Link} from 'react-router-dom'


function Header(props){
    return <Navbar bg="light" expand="lg" sticky="top">
    <Navbar.Brand href="/"><img src= {logo}  alt="logo" height="60" width="50"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/blog">Blog</Nav.Link>
        <NavDropdown title="Catalog" id="basic-nav-dropdown" >
        <Container style={{width: '500px'}}>
          <Row >
           
            <Col>
              <h5>Subject</h5>
         <Link className ="blackfont"to="/AllProducts" onClick={()=>props.onFilterChange('Landscapes')}>Landscapes</Link>
         <Link className ="blackfont"to="/AllProducts" onClick={()=>props.onFilterChange('People')}>People</Link>
         <Link className ="blackfont"to="/AllProducts" onClick={()=>props.onFilterChange('Floral')}>Floral</Link>
         <Link className ="blackfont"to="/AllProducts" onClick={()=>props.onFilterChange('Animals')}>Animals</Link>
         <Link className ="blackfont"to="/AllProducts" onClick={()=>props.onFilterChange('Still Life')}>Still Life</Link>
            </Col>
            <Col>
              <h5>For your budget</h5>
             <Link className ="blackfont"to="/AllProducts" onClick={()=>props.onFilterChange(100)}>100$ and under</Link>
             <Link className ="blackfont"to="/AllProducts" onClick={()=>props.onFilterChange(500)}>500$ and under</Link>
             <Link className ="blackfont"to="/AllProducts" onClick={()=>props.onFilterChange(1000)}>1000$ and under</Link>
             <Link className ="blackfont"to="/AllProducts" onClick={()=>props.onFilterChange(1001)}> over 1000$ </Link>
              </Col>
          
            </Row>
            </Container>
        </NavDropdown>
        
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Nav.Link href="/Login">Login</Nav.Link>
        <Nav.Link href="/SignIn">Join</Nav.Link>
        <Nav.Link href="/ShoppingCart"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
    </Navbar.Collapse>
  </Navbar>

}

export default Header;