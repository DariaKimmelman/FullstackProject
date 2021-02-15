import React from 'react'
import {Card} from 'react-bootstrap'

function MainCard(props){
    return <figure>
    <img src={props.paintings.pic} alt="Trulli" style={{width:'160px', height:'160px'}}></img>
    <figcaption>{props.paintings.name}</figcaption>
    
    </figure>
    
}
export default MainCard
