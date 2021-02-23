import React from 'react';
import {Navbar, Nav, Form, FormControl, NavDropdown, Button, Container, Modal} from 'react-bootstrap';
import ReactDOM from 'react-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from './logo.png';
import './header.css'
import { propTypes } from 'react-bootstrap/esm/Image';
import {Link} from 'react-router-dom'
import {useState} from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

function Header(props){
  
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [search, setSearch] = useState('');
    return <Navbar bg="light" expand="lg" sticky="top">
    <Navbar.Brand href="/"><img src= {logo}  alt="logo" height="60" width="50"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/UserPage">About</Nav.Link>
        <Nav.Link href="/BlogMain">Blog</Nav.Link>
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
        <FormControl type="text" onChange = {(e)=>{setSearch(e.target.value)}} placeholder="Search" className="mr-sm-2" />
        <Link to='/AllProducts'><Button onClick={()=>{props.onFilterChange(search)}} style={{border: 'none'}} variant="outline-dark">Search</Button></Link>
      </Form>
      <Button style={{border: 'none'}} variant="outline-dark" onClick={handleShow} >Login</Button>
      <Modal show={show} onHide={handleClose} >
      <Modal.Header style={{border:'none',backgroundColor:'#ebe8e5', padding:'10px'}}closeButton/>
      <MDBContainer style={{textAlign:"center",backgroundColor:'#ebe8e5'}}>
  <MDBRow>
    <MDBCol md="11">
      <form>
        <p className="h4 text-center mb-4">Login to your account</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Your password
        </label>
        <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
        <div className="text-center mt-4">
          <MDBBtn  className="login" color="danger" type="submit" block>Login</MDBBtn>
        </div>
        <Link to='/forgotten' style={{marginBottom:'15px'}}>Forgot password</Link>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
      </Modal>
      <Button style={{border: 'none'}} variant="outline-dark" onClick={handleShow2} >Sign In</Button>
      <Modal show={show2} onHide={handleClose2} >
      <Modal.Header style={{border:'none',backgroundColor:'#ebe8e5', padding:'10px'}}closeButton/>
      <MDBContainer style={{textAlign:"center",backgroundColor:'#ebe8e5'}}>
  <MDBRow>
    <MDBCol md="11">
      <form>
        <p className="h4 text-center mb-4">Sign In</p>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Your First Name
        </label>
        <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          Your Last Name
        </label>
        <input type="text" id="defaultFormRegisterLNameEx" className="form-control" />
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Your email
        </label>
        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Your password
        </label>
        <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
        <div className="text-center mt-4">
          <MDBBtn  className="login" color="danger" type="submit" block>Sign In</MDBBtn>
        </div>
        
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
      </Modal>
        <Nav.Link href="/ShoppingCart"><FontAwesomeIcon icon={faShoppingCart} /></Nav.Link>
    </Navbar.Collapse>
    
  </Navbar>

}

export default Header;