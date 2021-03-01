import React from 'react'
import {Card, Button} from 'react-bootstrap'
import './ProductCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

function ProductCard(props){
    let price;
    let heart = <span className = 'right' ><FontAwesomeIcon style={{marginLeft:'3px'}} icon={faHeart}/> </span>;
    let cart;
    let sold;
    if(props.paintings.instock){
        price = <span style={{fontWeight: 'bolder'}}>{props.paintings.price}$</span>
        cart = <span className = 'right'><FontAwesomeIcon  icon={faShoppingCart}/></span>
        

    }
    else{
        price = <span className = 'linethrough' style={{fontWeight: 'bolder'}}>{props.paintings.price}$  </span>
        sold = <span style={{fontWeight: 'bolder', marginLeft: '5px'}}>Sold <span style={{color: 'red'}}>●</span></span>
        
    }
   return <Card className="card padding" >
       <LinkContainer onClick={()=>props.onClickOnCard(props.paintings.id)} to='/ProductPage' >
   <Card.Img  variant="top" src={props.paintings.pic}/>
   </LinkContainer>
   <Card.Body >
    <h6 className="carddesign">{props.paintings.name}</h6>
     <h6 className="carddesign">{props.paintings.author}</h6>
     <div>{price}{sold}{heart}{cart}</div>
   </Card.Body>
 </Card>
    
}
export default ProductCard