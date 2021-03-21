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
    var payReq = JSON.stringify({
        intent:'order',
        payer: {
          payment_method: 'paypal'
        },
        redirect_urls:{
          return_url:'http://localhost:3001/process',
          cancel_url:'http://localhost:3001/cancel'
        },
        transactions: [{
          amount: {
            total: '30.03',
            currency: 'USD',
            details: {
              subtotal: '30.00',
              tax: '0.03'
            }
          },
          description: 'This is the payment transaction description.',
          invoice_number: '485787589673',
          payment_options: {
            allowed_payment_method: 'INSTANT_FUNDING_SOURCE'
          },
          item_list:{
            items: [{
              name: 'hat',
              quantity: '5',
              price: '3',
              tax: '0.01',
              sku: '123123',
              currency: 'USD'
            },{
              name: 'handbag',
              quantity: '1',
              price: '15',
              tax: '0.02',
              sku: '456456',
              currency: 'USD'
            }]
          }
        }]
      });
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
                    <Link to="/checkout"><Button amount={price.total} onClick={()=>{props.passPrice(price)}} style={{marginBottom: '10px'}}variant="danger" block>Checkout →</Button></Link>
                    <PayPalButton amount={price.total}
           options={{clientId: "Ace17jwVCbrCbYu5WF6wMQ9m3l6ulq-4xeee0pdq9LKbScgzrOGy0nBB1I-XMvL_WAUGg1OAQGGjMDxc" }}  onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name)}} style={style}/>
          
        
                
            </div>
            </div></Col>
        </Row>
    </Container>;
    
}

export default ShoppingCart;