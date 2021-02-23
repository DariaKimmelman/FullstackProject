import React from 'react'
import{Container, Row, Col, Button} from 'react-bootstrap'
import './ProductPage.css'
import back from './background.jpg'


function Product(props){
    const stars = [];
    for(let i = 0; i < props.painting.rating; i++){
        stars.push(<span key={i} style={{color: 'red', fontSize: '25px' }}>★</span>);

    }
    let exists;
    if(!props.painting.instock){
        exists = '♦ Sold';
    }
    else{
        exists = '';
    }

    return <Container  id='ppage' style={{backgroundImage: `url(${back})`, height:'100%'}}  fluid >
    <Row >
      <Col xs={1}style={{width:'112px'}}></Col>
      <Col xs={6} style={{paddingLeft:'0', imageWidth:'100%', width:'675px'}}><img style={{width:'100%'}} src={props.painting.pic} alt={props.painting.name}/></Col>
      <Col xs={3}><div id="paintingDetails">
          <h5>{props.painting.name} ({props.painting.year})</h5>
          <p  >by <span style={{textDecoration:'underline'}}>{props.painting.author}</span> </p>
          <h5 id="price">{props.painting.price} $</h5>
          <span id="sold">{exists}</span>
         <ul>
             <li>One of a kind artwork</li>
             <li>{props.painting.medium}</li>
             <li>Size: {props.painting.size}</li>
             <li>Subject: <span style={{textDecoration:'underline'}}>{props.painting.subject}</span></li>

         </ul>
         <p>{stars} </p>
      </div>
      <Button variant="danger" block>Add to Cart</Button> 
      <div style={{paddingBottom:'50%'}}>
      <Button variant="secondary" className = "topandleft"style={{width:'48%', marginTop:'10px'}}> ♥ Favorite</Button>
      <Button variant="secondary" style={{width:'48%',marginTop:'10px' , marginLeft:'10px'}}> ☹ Dislike</Button>
      </div>
      </Col>
    </Row>
  </Container>

}
export default Product;
    
