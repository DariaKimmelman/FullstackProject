import React from 'react'
import ProductCard from '../ProductCard/ProductCard.jsx'
import {CardColumns} from 'react-bootstrap'
function Favourites(props){
    function turnToCard(item, index){
        return <ProductCard style={{minWidth:'200px'}}  onClickOnCard = {props.onClickOnCard} key={index} paintings = {item}/>

    }
    return <CardColumns style={{columnCount:'4', paddingLeft:'0', width:'90%'}}>{props.paintings.map(turnToCard)}
    </CardColumns>
}

export default Favourites