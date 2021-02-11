import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import image from './monaLisa.jpg'
import AllProducts from './AllProducts.jsx'
import Product from './ProductPage.jsx'
import About from './about.jsx'
function Main(){
    const painting = {
        pic: image,
        name: 'Mona Lisa',
        year: '1516',
        author:'Leonardo Da Vinci',
        price: 10000000,
        medium: 'Oil on poplar paper',
        size: '77cm * 53 cm',
        subject: 'People',
        rating: 5,
        instock: false

    }
    return <div><Header/><About/><Footer/> </div>;
}
export default Main;