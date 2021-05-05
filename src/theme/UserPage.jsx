import {React, useState, useContext} from 'react'
import {Nav, Row, Col} from 'react-bootstrap'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import background from './background.jpg'
  import './UserPage.css'
  import ChangeDetails from './ChangeDetails/ChangeDetails.jsx'
  import Favourites from './Favourites/favourites.jsx'
  import OrdersHistory from './OrdersHistory/OrdersHistory.jsx'
  import Store, {StoreContext} from './global'

function UserPage(props) {
  const [store, updateStore] = useContext(StoreContext)
  const customerorders =[{id:1, name: 'wawa', price:100, shipping:'Tel Aviv', date: new Date() },
  {id:2, name: 'nana', price:200, shipping:'Tokyo', date: new Date() },
  {id:3, name: 'gaga', price:300, shipping:'Teheran', date: new Date() },
  {id:4, name: 'lala', price:400, shipping:'New York', date: new Date() }]
   const [comp, setComp] = useState(<ChangeDetails></ChangeDetails>)

    return <div style={{textAlign:'center', backgroundImage:`url(${background})`, backgroundSize:'cover',
    marginBottom:'20px'}}>
        <Row ><h3 style={{marginLeft:'45%', marginBottom:'20px', marginTop:'20px'}}>Welcome {store.user.fname}</h3></Row>
        <Row style={{minHeight:'500px'}}>
        <Col xs={1}></Col>
        <Col xs={2}>
        <Nav  defaultActiveKey="/home" className="flex-column">
    <button onClick = {()=>setComp(<ChangeDetails></ChangeDetails>)} className='navItemsstyle'href="/home">Account settings </button>
    <button onClick = {()=>setComp(<Favourites onClickOnCard = {props.onClickOnCard} paintings = {props.paintings}></Favourites>)} className='navItemsstyle' href="/home">Your favourite</button>
    <button onClick = {()=>setComp(<OrdersHistory orders = {customerorders}></OrdersHistory>)}  className='navItemsstyle'href="/home">Orders history</button>
   
    
   
  </Nav> </Col>
  <Col >{comp}</Col>
  </Row></div>
}

export default UserPage