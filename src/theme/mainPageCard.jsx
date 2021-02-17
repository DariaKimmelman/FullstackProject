import React from 'react'
import {Card} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {Link} from 'react-router-dom'

function MainCard(props){
    return <Link to="/ProductPage" style={{marginRight:'1%', color:'black', textDecoration:'none'}}><figure >
    <img src={props.paintings.pic} alt={props.paintings.name} style={{width:'160px', height:'160px'}}></img>
    <figcaption>{props.paintings.name}</figcaption>
    
    </figure></Link>
    
}
export default MainCard
