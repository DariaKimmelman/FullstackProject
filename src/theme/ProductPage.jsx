import {React, useState, useEffect} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ProductPage.css';
import back from './background.jpg';
import * as api from '../api'
import axios from 'axios'

function Product(props) {
	const [painting, setPaintings] = useState("")
	console.log(props.painting)
	useEffect(async()=>{
		const painting = await api.getById('products', props.painting);
		setPaintings(painting.data[0])
		console.log(painting.data);

	}, [])
	let rating;
	if(painting.totalVotes === 0 || painting.score === 0 ){
		rating = 1
	}
	else{
		rating = Math.round((painting.score / painting.totalVotes) * 5)
	}
	const stars = [];
	for (let i = 0; i < rating; i++) {
		stars.push(
			<span key={i} style={{ color: 'red', fontSize: '25px' }}>
				★
			</span>
		);
	}
	let exists;
	if (!painting.instock) {
		exists = '♦ Sold';
	} else {
		exists = '';
	}
	let devUrl = `http://localhost:3001/images/${painting.pic}`

	return (
		<Container id="ppage" style={{ backgroundImage: `url(${back})`, height: '100%' }} fluid>
			<Row>
				<Col xs={1} style={{ width: '112px' }} />
				<Col xs={6} style={{ paddingLeft: '0', imageWidth: '100%', width: '675px' }}>
					<img
						style={{ width: '100%', maxHeight: '1200px', paddingBottom: '15px' }}
						src={devUrl}
						alt={painting.name}
					/>
				</Col>
				<Col xs={3}>
					<div id="paintingDetails">
						<h5>{painting.name}</h5>
						<p>
							by <span style={{ textDecoration: 'underline' }}>{painting.author}</span>{' '}
						</p>
						<h5 id="price">{painting.price} $</h5>
						<span id="sold">{exists}</span>
						<ul>
							<li>One of a kind artwork</li>
							<li>{painting.medium}</li>
							<li>Size: {painting.size}</li>
							<li>
								Subject: <span style={{ textDecoration: 'underline' }}>{painting.subject}</span>
							</li>
						</ul>
						<p>{stars} </p>
					</div>
					<Button variant="danger" block>
						Add to Cart
					</Button>
					<div style={{ paddingBottom: '50%' }}>
						<Button variant="secondary" className="topandleft" style={{ width: '48%', marginTop: '10px' }}>
							{' '}
							♥ Favorite
						</Button>
						<Button variant="secondary" style={{ width: '48%', marginTop: '10px', marginLeft: '10px' }}>
							{' '}
							☹ Dislike
						</Button>
					</div>
				</Col>
			</Row>
		</Container>
	);
}
export default Product;
