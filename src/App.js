import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './theme/main.js';
import Header from './theme/header.js';
import Footer from './theme/footer.js';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from './theme/home';
import Product from './theme/ProductPage';
import AllProducts from './theme/AllProducts';
import About from './theme/about';
import Blog from './theme/blog';
import Login from './theme/Login';
import SignIn from './theme/SignIn';
import ShoppingCart from './theme/ShoppingCart';
import ContactUs from './theme/contactus';
import ReactDOM from 'react-dom'
import mona from './theme/monaLisa.jpg'
import girl from './theme/girlwithpearl.jpg'
import night from './theme/starrynight.jpg'
import {useState} from 'react'

function App() {
 
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
const [pictures, setPictures] = useState(paintings)
function handleFilterChange(filter){
 
 let newpaintings;
 if(typeof filter == 'string'){
  newpaintings= paintings.filter((element)=>{return element.subject == filter});
 }
 if(typeof filter == 'number' && filter <= 1000){
  newpaintings= paintings.filter((element)=>{return element.price <= filter});

 }
 if(typeof filter == 'number' && filter > 1000){
  newpaintings= paintings.filter((element)=>{return element.price > filter});

 }
  
  setPictures([...newpaintings]);
}


  return (
    <BrowserRouter>
    <div className="App">
      <Header onFilterChange={handleFilterChange}/>
      <Switch>
      <Route exact path="/" exact component={MainPage}></Route>
      <Route exact path="/ProductPage" component={Product}></Route>
      <Route exact path="/AllProducts" component={()=> <AllProducts paintings = {pictures}/>}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contactus" component={ContactUs}></Route>
      <Route exact path="/Blog" component={Blog}></Route>
      <Route exact path="/Login" component={Login}></Route>
      <Route exact path="/Signin" component={SignIn}></Route>
      <Route exact path="/ShoppingCart" component={()=> <ShoppingCart paintings = {paintings}/>}></Route>
    </Switch>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
