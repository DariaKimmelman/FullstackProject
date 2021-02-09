import React from 'react'
import{Container, Row, Col, Button} from 'react-bootstrap'
import './ProductPage.css'


function Product(props){
    const stars = [];
    for(let i = 0; i < props.painting.rating; i++){
        
    }
    let exists;
    if(!props.painting.instock){
        exists = '♦ Sold';
    }
    else{
        exists = '';
    }

    return <Container>
    <Row>
      <Col xs={2}></Col>
      <Col><img src={props.painting.pic} alt={props.painting.name}/></Col>
      <Col><div id="paintingDetails">
          <h5>{props.painting.name} by {props.painting.author}</h5>
          <h6>{props.painting.price} $</h6>
          <span id="sold">{exists}</span>
         <ul>
             <li>{props.painting.medium}</li>
             <li>Size: {props.painting.size}</li>
             <li>Subject: {props.painting.subject}</li>

         </ul>
         <p>Rating: </p>
      </div>
      <Button variant="danger" block>Add to Cart</Button> 
      <Button variant="secondary" className = "topandleft"style={{width:'48%', marginTop:'10px'}}> ♥ Favorite</Button>
      <Button variant="secondary" style={{width:'48%',marginTop:'10px' , marginLeft:'10px'}}> ☹ Dislike</Button>
      </Col>
    </Row>
  </Container>

}
export default Product;
    
