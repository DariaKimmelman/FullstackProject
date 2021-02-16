import React from 'react'
import background from './background.jpg'
import {Row, Col, Container, Button} from 'react-bootstrap'
import './ShoppingCart.css'
import { PayPalButton } from "react-paypal-button-v2";
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem.jsx'
function ShoppingCart(props){
    let paintings = props.paintings;
    function sum(){
        let sum = 0
        for(const item of props.paintings){
            sum+=item.price
        }
        return sum;
        
    }
    function toShoppingCartItem(item, index){
        return <ShoppingCartItem key={index} paintings={item}/>;
    }


    return <Container fluid style={{backgroundImage: `URL(${background})`, backgroundSize:'cover'}}>
        <Row style={{textAlign:'center'}}>
        <h3 style={{paddingLeft:'45%', paddingBottom:'20px'}}>Shopping Cart</h3>
        </Row>
        <Row>
            <Col xs={1}></Col>
            <Col>
                {paintings.map(toShoppingCartItem)}
            </Col>
            <Col id= 'ordersummary' xs={4} style={{textAlign:'left'}}>
                <h5>Order Summary</h5>
                <div>
                <p>Artwork subtotal <span style={{float:'right'}}>0.0$</span></p>
                <p>Shipping total <span style={{float:'right'}}>30$</span></p>
                <p style={{fontWeight:'bolder'}}>Order total <span style={{float:'right'}}>{sum()}$</span></p>
                <Button style={{marginBottom: '10px'}}variant="danger" block>Checkout →</Button>
                <PayPalButton ></PayPalButton>
                
            </div></Col>
        </Row>
    </Container>;
    
}

export default ShoppingCart;