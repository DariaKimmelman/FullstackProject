import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import mona from './monaLisa.jpg'
import girl from './girlwithpearl.jpg'
import night from './starrynight.jpg'
import ProductCard from './ProductCard/ProductCard.jsx'
import {CardDeck} from 'react-bootstrap'
import background from './background.jpg'
import './AllProducts.css'



function AllProducts() {
    const [selectValue, setSelectValue] = useState('2')
    let paintings = [{
        pic: mona,
        name: 'Mona Lisa',
        year: '1516',
        author:'Leonardo Da Vinci',
        price: 10000000,
        medium: 'Oil on poplar paper',
        size: '77cm * 53 cm',
        subject: 'People',
        rating: 5,
        instock: false

    }, {
        pic: girl,
        name: 'Girl With a Pearl Earring',
        year: '1665',
        author:'Johannes Vermeer',
        price: 80000,
        medium: 'Oil on canvas',
        size: '44.5 cm × 39 cm ',
        subject: 'People',
        rating: 4,
        instock: true

    },
    {
        pic: night,
        name: 'Starry Night',
        year: '1889',
        author:'Vincent van Gogh',
        price: 20000,
        medium: 'Oil on canvas',
        size: '73.7 cm × 92.1 cm ',
        subject: 'Landscapes',
        rating: 3,
        instock: true

    }]
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
        return a.name.rating - b.name.rating;
        
    }
    
       
 
        
        
       
    function updatePaintings(newvalue){
       
      setSelectValue(newvalue);
                
                
        
    }
    


        
    
    function turnToCard(item, index){
        return <ProductCard key={index} paintings = {item}/>

    }
    
    
    
    return <div > 
    
       <select name="" id="" value={selectValue} onChange={(e) =>updatePaintings(e.target.value)}>
            <option value="1"  >Price(Low)</option> 
           <option value="2">Price(High)</option>
          <option value="3">Top Rated</option> 
       </select>
        <CardDeck style={{backgroundImage: `url(${background})`, backgroundSize:'cover'}}>{paintings2.map(turnToCard)}
</CardDeck>
        </div>
    
}


export default AllProducts;