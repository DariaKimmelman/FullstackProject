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
import AllProducts from './theme/AllProducts';
import About from './theme/about';
import Blog from './theme/blog';
import Login from './theme/Login';
import SignIn from './theme/SignIn';
import ShoppingCart from './theme/ShoppingCart';
import ContactUs from './theme/contactus';
import Product from './theme/ProductPage'
import ReactDOM from 'react-dom'
import mona from './theme/monaLisa.jpg'
import girl from './theme/girlwithpearl.jpg'
import night from './theme/starrynight.jpg'
import {useState} from 'react'
import Checkout from './theme/checkout';
import BlogMain from './theme/BlogMain'
import Forgotten from './theme/forgotten';
import UserPage from './theme/UserPage';
import AdminPage from './theme/AdminPage';

function App() {
 
  let paintings = [{
    id:1,
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
  id:2,
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
    id:3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id:7,
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
const painting = {
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

}
const orders = [{orderId: 1, ProductId: 5, ProductName: 'Alien', CustomerId: 8, price: 100, customerId: 565, customerName: 'kaka', orderDate: new Date() },
{orderId: 5, ProductId: 7, ProductName: 'Cow', CustomerId: 89, price: 700, customerId: 556, customerName: 'lala', orderDate: new Date() }]
const subjects = ['People', 'Landscapes', 'Floral', 'Animals','Still Life'];
const [pictures, setPictures] = useState(paintings)
function handleFilterChange(filter){
 
 let newpaintings;
 if(subjects.includes(filter)){
  newpaintings= paintings.filter((element)=>{return element.subject == filter});
 }
 if(typeof filter == 'number' && filter <= 1000){
  newpaintings= paintings.filter((element)=>{return element.price <= filter});

 }
 if(typeof filter == 'number' && filter > 1000){
  newpaintings= paintings.filter((element)=>{return element.price > filter});

 }
 if(!subjects.includes(filter) && typeof filter != 'number'){
   newpaintings = paintings.filter((item)=>{return item.name.toLowerCase().includes(filter.toLowerCase()) || item.author.toLowerCase().includes(filter.toLowerCase()) || item.medium.toLowerCase().includes(filter.toLowerCase()) || item.price == Number(filter)})
 }
  
  setPictures([...newpaintings]);
}






  return (
    <div className="App" style={{}}>
    <BrowserRouter>
    
      <Header onFilterChange={handleFilterChange}/>
      <Switch>
      <Route exact path="/" exact component={MainPage}></Route>
      <Route exact path="/AllProducts" component={()=> <AllProducts paintings = {pictures}/>}></Route>
      <Route exact path="/about" component={About}></Route>
      <Route exact path="/contactus" component={ContactUs}></Route>
      <Route exact path="/Blog" component={Blog}></Route>
      <Route exact path="/Login" component={Login}></Route>
      <Route exact path="/Signin" component={SignIn}></Route>
      <Route exact path="/ShoppingCart" component={()=> <ShoppingCart paintings = {paintings}/>}></Route>
      <Route exact path="/ProductPage" component={()=> <Product onClickOnCard={(i)=>{console.log(i)}} /*painting = {painting}*//>}></Route>
      <Route exact path="/checkout"  component={()=> <Checkout sum = {6000}/>}></Route>
      <Route exact path="/BlogMain"  component={BlogMain}></Route>
      <Route exact path="/forgotten"  component={Forgotten}></Route>
      <Route exact path="/AdminPage"  component={()=> <AdminPage orders = {orders}/>}></Route>
      <Route exact path="/UserPage"  component={()=> <UserPage orders = {orders}/>}></Route>

    </Switch>
      <Footer />
   
    </BrowserRouter>
    </div>
  );
}

export default App;
