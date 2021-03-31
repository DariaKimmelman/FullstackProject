import React from 'react'
import {Card} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {Link} from 'react-router-dom'

function MainCard(props){
    let devUrl = `http://localhost:3001/images/${props.paintings.pic}`
    return <Link to= {`/ProductPage/${props.paintings.id}`} onClick={()=>props.onClickOnCard(props.paintings.id)}  style={{marginRight:'1%', color:'black', textDecoration:'none'}}><figure >
    <img src={devUrl} alt={props.paintings.name} style={{width:'160px', height:'160px'}}></img>
    <figcaption>{props.paintings.name}</figcaption>
    
    </figure></Link>
    
}
export default MainCard
