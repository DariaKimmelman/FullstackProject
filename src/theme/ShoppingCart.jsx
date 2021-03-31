import React from 'react'
import background from './background.jpg'
import {Row, Col, Container, Button} from 'react-bootstrap'
import './ShoppingCart.css'
import { PayPalButton } from "react-paypal-button-v2";
import ShoppingCartItem from './ShoppingCartItem/ShoppingCartItem.jsx'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import * as api from '../api'
import Store, { StoreContext } from './global';
function ShoppingCart(props){
    const style={
        color:'black',
        label: 'paypal',

    }
    
    const [store,updateStore] = useContext(StoreContext);
    const[price, setPrice] =useState({price:0, ship:0, total:0})
    let [paintings, setPaintings] = useState(store.cart);
    
    const orderList = paintings.map((item)=>{return {name: item.name, 
      unit_amount: {
        currency_code: "USD",
        value: item.price
    },
    quantity: "1"}})
    const checkout = paintings.map((item)=> {return {name: item.name, price:item.price}})
    
    const payReq =  {
      purchase_units: [
      {
          
          amount: {
              currency_code: "USD",
              value: price.total,
              breakdown: {
                  item_total: {
                      currency_code: "USD",
                      value: price.price
                  },
                  shipping: {
                    currency_code: "USD",
                    value: price.ship
                },
              }
          },
          items: orderList
              
              
          

      }
  ]
};


    
    useEffect(()=>sum(), [paintings])
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
        
        setPaintings(paintings.filter((item)=>{return item.id != id}));
        console.log(paintings);
         updateStore({...store, cart:paintings.filter((item)=>{return item.id != id})})

        
        
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
                    <Link to="/checkout"><Button  onClick={()=>{props.passPrice(price); props.passCart(checkout)}} style={{marginBottom: '10px'}}variant="danger" block>Checkout →</Button></Link>
                    <PayPalButton createOrder={(data, actions) => {
          return actions.order.create(payReq)}}
           options={{clientId: "Ace17jwVCbrCbYu5WF6wMQ9m3l6ulq-4xeee0pdq9LKbScgzrOGy0nBB1I-XMvL_WAUGg1OAQGGjMDxc" }} 
            onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
       
         // console.log(`${details.purchase_units.shipping.address.address_line1} ${details.purchase_units.shipping.address.admin_area2} ${details.purchase_units.shipping.address.admin_area1} ${details.purchase_units.shipping.address.postal_code}`)


         console.log(`${details.purchase_units[0].shipping.address.address_line_1}`);

         return api.postData('orders', {
              time:details.create_time,
              total:price.total,
              items:checkout,
             customer:{
                  fname:`${details.payer.name.given_name} ${details.payer.name.surname}`,
                  email:details.payer.email_address,
                  address:`${details.purchase_units[0].shipping.address.address_line_1} ${details.purchase_units[0].shipping.address.admin_area_2} ${details.purchase_units[0].shipping.address.admin_area_1} ${details.purchase_units[0].shipping.address.postal_code}`

               }
              


          })}} style={style}/>
          
        
                
            </div>
            </div></Col>
        </Row>
    </Container>;
    
}

export default ShoppingCart;