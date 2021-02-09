import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import image from './monaLisa.jpg'
import Product from './ProductPage.jsx'
function Main(){
    const painting = {
        pic: image,
        name: 'Mona Lisa',
        author:'Leonardo Da Vinci',
        price: 100,
        medium: 'Oil on poplar paper',
        size: '77cm * 53 cm',
        subject: 'People',
        rating: 5,
        instock: false

    }
    return <div><Header/><Product painting={painting}/><Footer/> </div>;
}
export default Main;