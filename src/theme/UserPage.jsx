import React from 'react'
import {Nav, Row, Col} from 'react-bootstrap'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import background from './background.jpg'
  import './UserPage.css'

function UserPage(props) {

    return <div style={{textAlign:'center', backgroundImage:`url(${background})`, backgroundSize:'cover',
    marginBottom:'20px'}}>
        <Row ><h3 style={{marginLeft:'45%', marginBottom:'20px'}}>Welcome user</h3></Row>
        <Row style={{minHeight:'500px'}}>
        <Col xs={1}></Col>
        <Col xs={2}>
        <Nav  defaultActiveKey="/home" className="flex-column">
    <Link  className='navItemsstyle'href="/home">Account settings </Link>
    <Link className='navItemsstyle' href="/home">Your favourite</Link>
    <Link  className='navItemsstyle'href="/home">Orders history</Link>
   
    
   
  </Nav> </Col></Row></div>
}

export default UserPage