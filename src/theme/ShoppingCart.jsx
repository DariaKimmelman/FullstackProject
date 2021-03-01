import React from 'react'
import background from './background.jpg'
import {Row, Col, Container, Button} from 'react-bootstrap'
import './ShoppingCart.css'
import { PayPalButton } from "react-paypal-button-v2";
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem.jsx'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
function ShoppingCart(props){
    const style={
        color:'black',
        label: 'paypal',

    }
    const[price, setPrice] =useState({price:0, ship:0, total:0})
    let [paintings, setPaintings] = useState(props.paintings);
    useEffect(()=>sum())
    function sum(){
        let price = 0
        let ship = 0;
        let  total = 0;
        for(const item of paintings){
            price+=item.price
            
        }
        if(price == 0){
       ship = 0}
        else{
           ship =30;
        }
        total = price + ship
        setPrice({price:price, ship:ship, total:total})
        
    }
    
    function remove(id) {
        console.log(id);
        setPaintings(paintings.filter((item)=>{return item.id != id}));
        sum()
        console.log(paintings);
        
    }
    function toShoppingCartItem(item, index){
        return <ShoppingCartItem  onClickOnCard = {props.onClickOnCard} key={index} paintings={item} onRemove= {remove}/>;
    }


    return <Container fluid style={{backgroundImage: `URL(${background})`, backgroundSize:'cover', minHeight:'550px'}}>
        <Row style={{textAlign:'center'}}>
        <h3 style={{paddingLeft:'45%', paddingBottom:'20px'}}>Shopping Cart</h3>
        </Row>
        <Row>
            <Col xs={1}></Col>
            <Col>
                {paintings.map(toShoppingCartItem)}
            </Col>
            <Col  xs={4} style={{textAlign:'left'}}>
                <div id= 'ordersummary'>
                <h5>Order Summary</h5>
                <div>
                    <p>Artwork subtotal <span style={{float:'right'}}>{price.price}$</span></p>
                    <p>Shipping total <span style={{float:'right'}}>{price.ship}$</span></p>
                    <p style={{fontWeight:'bolder'}}>Order total <span style={{float:'right'}}>{price.total}$</span></p>
                    <Link to="/checkout"><Button style={{marginBottom: '10px'}}variant="danger" block>Checkout →</Button></Link>
                    <PayPalButton style={style}></PayPalButton>
                
            </div>
            </div></Col>
        </Row>
    </Container>;
    
}

export default ShoppingCart;