import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import mona from './monaLisa.jpg'
import girl from './girlwithpearl.jpg'
import night from './starrynight.jpg'
import ProductCard from './ProductCard/ProductCard.jsx'
import {CardColumns, Row} from 'react-bootstrap'
import background from './background.jpg'
import './AllProducts.css'



function AllProducts(props) {
    const [selectValue, setSelectValue] = useState('2')
    let paintings =props.paintings;
    console.log(props.paintings);
    const [paintings2, setPaintings2] = useState(paintings);
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
        return b.rating - a.rating;
        
    }
    
       
 
        
        
       
    function updatePaintings(newvalue){
       
      setSelectValue(newvalue);
                
                
        
    }
    


        
    
    function turnToCard(item, index){
        return <ProductCard key={index} paintings = {item}/>

    }
    
    
    
    return <div > 
       <Row className='pink'>
       <select name="" id="" value={selectValue} onChange={(e) =>updatePaintings(e.target.value)}>
            <option value="1"  >Price(Low)</option> 
           <option value="2">Price(High)</option>
          <option value="3">Top Rated</option> 
       </select>
       </Row>
       <div style={{backgroundImage: `url(${background})`, backgroundSize:'cover', minHeight:'500px'}} className="wrap-cards">
        <CardColumns style={{ columnCount:'5'}}>{paintings2.map(turnToCard)}
</CardColumns>
</div>
      </div>
        
    
}


export default AllProducts;