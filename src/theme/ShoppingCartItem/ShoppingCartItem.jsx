import React from 'react'
import {Row} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {Link} from 'react-router-dom'



function ShoppingCartItem(props){
    let devUrl = `http://localhost:3001/images/${props.paintings.pic}`
    return <Row style= {{textAlign:'left', marginTop:'15px', marginBottom:'15px', paddingTop:'15px', backgroundColor:'white', paddingLeft:'15px'}}>
    <Link to={`/ProductPage/${props.paintings.id}`} onClick={()=>props.onClickOnCard(props.paintings.id)}><img src={devUrl} alt="" style= {{width: '150px',height: '150px', paddingTop: '0'}}/></Link>
    <p style={{marginLeft: '25px'}}>{props.paintings.name}
        <br/>
        by {props.paintings.author}
        <br/>
        {props.paintings.medium}
        <br/>
        {props.paintings.size}
        <br/>
        {props.paintings.price}$
        <br/>
        <button onClick={()=>props.onRemove(props.paintings.id)} style={{border:'none', paddingLeft:'0', textDecoration:'underline', backgroundColor:'white'}}>Remove</button>
    </p>
    
    
    </Row>

}

export default ShoppingCartItem