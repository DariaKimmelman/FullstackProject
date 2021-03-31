import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import mona from './monaLisa.jpg'
import girl from './girlwithpearl.jpg'
import night from './starrynight.jpg'
import ProductCard from './ProductCard/ProductCard.jsx'
import {CardColumns, Row, Jumbotron} from 'react-bootstrap'
import background from './background.jpg'
import './AllProducts.css'
import axios from 'axios'
import * as api from "../api.js"
import { LinkContainer } from 'react-router-bootstrap'



function AllProducts(props) {
    console.log(props.onAddProd)
    console.log(props.paintings);
    const [selectValue, setSelectValue] = useState('2')
    //let paintings =props.paintings;
    const [paintings, setPaintings] = useState([]);
    const [paintings2, setPaintings2] = useState([]);
    const subjects = [ 'People', 'Landscapes', 'Floral', 'Animals', 'Still Life' ];
   
    useEffect(async()=>{
        if(!props.paintings){
        const art = await api.getAll('products');
        
        
        setPaintings(art.data);
        setPaintings2(art.data.sort(highToLow))}
        else{
            let newpaintings;
            if (subjects.includes(props.paintings)) {
                newpaintings = await api.getByCategory('products', props.paintings)
                setPaintings([ ...newpaintings.data ].sort(highToLow));
            setPaintings2([ ...newpaintings.data].sort(highToLow));
                }
            if (typeof props.paintings == 'number' && props.paintings <= 1000) {
                newpaintings =  await api.getAll('products')
                setPaintings([ ...newpaintings.data].filter(lessThan1000))
            setPaintings2([ ...newpaintings.data].filter(lessThan1000).sort(highToLow))
            }
            if (typeof props.paintings == 'number' && props.paintings > 1000) {
                newpaintings =  await api.getAll('products')
                setPaintings([ ...newpaintings.data].filter(moreThan1000 ));
            setPaintings2([ ...newpaintings.data].filter(moreThan1000 ).sort(highToLow));
            }
            if (!subjects.includes(props.paintings) && typeof props.paintings != 'number') {
                newpaintings =  await api.getAll('products')
                    setPaintings([ ...newpaintings.data].filter(search))
                    setPaintings2([ ...newpaintings.data].filter(search).sort(highToLow))
            }
        }
    },[])
            
            
            
           
            
        
    
                    

    
         
        


    
     let category = "Gallery"
     if(paintings.length > 0 && paintings.every((val)=>{ return val.subject === paintings[0].subject})){
         category = paintings[0].subject;

     }
   
    useEffect(()=>{
        
        switch(selectValue){
        case '1':
            
            
            setPaintings2((oldValue)=>{return [...oldValue.sort(lowToHigh)]});
            break;
        case '2':
           
           
            setPaintings2((oldValue)=>{return [...oldValue.sort(highToLow)]});
            break;
        case '3':
           
           
            setPaintings2((oldValue)=>{ return [...oldValue.sort(topRated)]});
            break;
    }
    }, [selectValue]
    )
    

    

   
    function lowToHigh(a, b) {
        return a.price - b.price;
        
    }
    function highToLow(a,b) {
        return b.price - a.price;
    }
    function topRated(a, b) {
        return b.score / b.totalVotes - a.score / a.totalVotes ;
        
    }
    function lessThan1000(element){
        return element.price <= props.paintings;
    }

    function moreThan1000(element){
        return element.price > props.paintings;
    }
    function search(item){
        return (
            item.name.toLowerCase().includes(props.paintings.toLowerCase()) ||
            item.author.toLowerCase().includes(props.paintings.toLowerCase()) ||
            item.medium.toLowerCase().includes(props.paintings.toLowerCase()) ||
            item.price == Number(props.paintings)
        ); 
}

    
       
 
        
        
       
    function updatePaintings(newvalue){
       
      setSelectValue(newvalue);
                
                
        
    }
    


    const navigateToProduct = ()=>{

    }
    
    function turnToCard(item, index){
        return <ProductCard onClickOnCard={props.onClickOnCard} onAddProd = {props.onAddProd}  key={index} paintings = {item}     />

    }
    
    
    
    return <div > 
       <Jumbotron className='pink' style={{marginBottom:'0', height:'150px', paddingTop:'50px', paddingBottom:'50px'}}>
           <h1>{category}</h1>
       
       </Jumbotron>
       <div style={{backgroundColor: '#f4f4f4'}}> 
       <select  name="" id="" value={selectValue} onChange={(e) =>updatePaintings(e.target.value)}>
            <option value="1"  >Price(Low)</option> 
           <option value="2">Price(High)</option>
          <option value="3">Top Rated</option> 
       </select>
       </div>
       <div style={{backgroundImage: `url(${background})`, backgroundSize:'cover', minHeight:'500px'}} className="wrap-cards">
        <CardColumns style={{ columnCount:'5'}}>{paintings2.map((item, index)=>  {
            
            return  <ProductCard onAddProd= {props.onAddProd} onClickOnCard = {() =>navigateToProduct(item.id)} key={index} paintings = {item}/>
        
        })}
</CardColumns>
</div>
      </div>
        
    
}


export default AllProducts;