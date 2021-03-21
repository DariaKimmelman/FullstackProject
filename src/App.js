import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './theme/main.js';
import Header from './theme/header.js';
import Footer from './theme/footer.js';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import MainPage from './theme/home';
import AllProducts from './theme/AllProducts';
import About from './theme/about';
import Blog from './theme/blog';
import Login from './theme/Login';
import SignIn from './theme/SignIn';
import ShoppingCart from './theme/ShoppingCart';
import ContactUs from './theme/contactus';
import Product from './theme/ProductPage';
import ReactDOM from 'react-dom';
import mona from './theme/monaLisa.jpg';
import girl from './theme/girlwithpearl.jpg';
import night from './theme/starrynight.jpg';
import { useState, useEffect } from 'react';
import Checkout from './theme/checkout';
import BlogMain from './theme/BlogMain';
import Forgotten from './theme/forgotten';
import UserPage from './theme/UserPage';
import AdminPage from './theme/AdminPage';

function App() {
	let paintings = [
		{
			id: 1,
			pic: 'public\images\boy.jpg',
			name: 'Mona Lisa',
			year: '1516',
			author: 'Leonardo Da Vinci',
			price: 10000000,
			medium: 'Oil on poplar paper',
			size: '77cm * 53 cm',
			subject: 'People',
			rating: 5,
			instock: false
		},
		{
			id: 2,
			pic: girl,
			name: 'Girl With a Pearl Earring',
			year: '1665',
			author: 'Johannes Vermeer',
			price: 80000,
			medium: 'Oil on canvas',
			size: '44.5 cm × 39 cm ',
			subject: 'People',
			rating: 4,
			instock: true
		},
		{
			id: 3,
			pic: girl,
			name: 'Girl With a Pearl Earring',
			year: '1665',
			author: 'Johannes Vermeer',
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
			author: 'Johannes Vermeer',
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
			author: 'Johannes Vermeer',
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
			author: 'Johannes Vermeer',
			price: 80000,
			medium: 'Oil on canvas',
			size: '44.5 cm × 39 cm ',
			subject: 'People',
			rating: 4,
			instock: true
		},
		{
			id: 7,
			pic: night,
			name: 'Starry Night',
			year: '1889',
			author: 'Vincent van Gogh',
			price: 20000,
			medium: 'Oil on canvas',
			size: '73.7 cm × 92.1 cm ',
			subject: 'Landscapes',
			rating: 3,
			instock: true
		}
	];
	const painting = {
		pic: night,
		name: 'Starry Night',
		year: '1889',
		author: 'Vincent van Gogh',
		price: 20000,
		medium: 'Oil on canvas',
		size: '73.7 cm × 92.1 cm ',
		subject: 'Landscapes',
		rating: 3,
		instock: true
	};

	const [ post, setPost ] = useState();
	const [ checkout, setCheckout ] = useState();

	async function loadPosts() {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts/');
		const data = await response.json();
		return data;
	}

	const [ posts, setPosts ] = useState([ 'loading' ]);
	window.onload = () => {
		if(sessionStorage.getItem('status')){
		loadPosts().then((data) => {
			const htmlPosts = data;

			setPosts(htmlPosts);
			window.sessionStorage.setItem('status', true);
		})};
	};

	const orders = [
		{
			orderId: 1,
			ProductId: 5,
			ProductName: 'Alien',
			CustomerId: 8,
			price: 100,
			customerId: 565,
			customerName: 'kaka',
			orderDate: new Date()
		},
		{
			orderId: 5,
			ProductId: 7,
			ProductName: 'Cow',
			CustomerId: 89,
			price: 700,
			customerId: 556,
			customerName: 'lala',
			orderDate: new Date()
		}
	];
	
	const [ pictures, setPictures ] = useState(paintings);
	const [ picture, setPicture ] = useState('');
	const [id, setId] = useState(0);
	const [postid, setPostId] = useState(0);

	function handleFilterChange(filter) {
		setPicture(filter)
		
	}

	function goTo(id) {
		
		setId(id);
	}

	function findPost(id) {
		
		setPostId(id);
	}

	return (
		<div className="App" style={{}}>
			<BrowserRouter>
				<Header onFilterChange={handleFilterChange} />
				<Switch>
					<Route
						exact
						path="/"
						exact
						component={() => <MainPage onClickOnCard={goTo} paintings={paintings} />}
					/>
					<Route
						exact
						path="/AllProducts"
						component={() => <AllProducts onClickOnCard={goTo} paintings={picture} />}
					/>
					<Route exact path="/about" component={About} />
					<Route exact path="/contactus" component={ContactUs} />
					<Route exact path="/Blog" component={() => <Blog posts={postid} />} />
					<Route exact path="/Login" component={Login} />
					<Route exact path="/Signin" component={SignIn} />
					<Route
						exact
						path="/ShoppingCart"
						component={() => (
							<ShoppingCart
								onClickOnCard={goTo}
								passPrice={(price) => {
									setCheckout(price);
								}}
								paintings={paintings}
							/>
						)}
					/>
					<Route exact path="/ProductPage" component={() => <Product painting={id} />} />
					<Route exact path="/checkout" component={() => <Checkout sum={checkout} />} />
					<Route
						exact
						path="/BlogMain"
						component={() => <BlogMain onClickOnPost={findPost} posts={posts} />}
					/>
					<Route exact path="/forgotten" component={Forgotten} />
					<Route exact path="/AdminPage" component={() => <AdminPage orders={orders} />} />
					<Route
						exact
						path="/UserPage"
						component={() => <UserPage onClickOnCard={goTo} paintings={paintings} />}
					/>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
