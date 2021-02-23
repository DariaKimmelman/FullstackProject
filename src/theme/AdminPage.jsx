import React from 'react'
import {Nav, Row, Col} from 'react-bootstrap'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import background from './background.jpg'
  import OrdersTable from './AdminOrders/OrdersTable.jsx'

function AdminPage(props) {

    return <div style={{textAlign:'center', backgroundImage:`url(${background})`, backgroundSize:'cover',
    marginTop:'20px'}}>
        <Row ><h3 style={{marginLeft:'45%',marginBottom:'20px'}}>Welcome Admin</h3></Row>
        <Row style={{minHeight:'500px'}}>
        <Col xs={1}></Col>
        <Col xs={2}>
        <Nav defaultActiveKey="/home" className="flex-column">
    <Link href="/home">Orders</Link>
    <Link href="/home">Clients</Link>
    <Link href="/home">Products</Link>
    
    
   
  </Nav> </Col>
   <Col style={{}}><OrdersTable orders= {props.orders}></OrdersTable>
   </Col></Row></div>
}

export default AdminPage