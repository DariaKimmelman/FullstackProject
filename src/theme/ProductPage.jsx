import { React, useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './ProductPage.css';
import back from './background.jpg';
import * as api from '../api';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { StoreContext } from './global';
import { useController } from 'react-hook-form';

function Product(props) {
	const [ store, updateStore ] = useContext(StoreContext);
	const [ painting, setPaintings ] = useState('');
	const { id } = useParams();
	useEffect(async () => {
		console.log(id);
		const painting = await api.getById('products', id);
		setPaintings(painting.data[0]);
		console.log(painting.data);
	}, []);
	let rating;
	if (painting.totalVotes === 0 || painting.score === 0) {
		rating = 1;
	} else {
		rating = Math.round(painting.score / painting.totalVotes * 5);
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
	let devUrl = `http://localhost:3001/images/${painting.pic}`;
	async function dislike() {
		if (store.user) {
			let newFavourites = [ ...store.user.favourites ];
			if (!store.user.votes.includes(painting.id)) {
				painting.totalVotes++;
				if (painting.score > 0) {
					painting.score--;
				} else {
					painting.score = 0;
				}
				store.user.votes.push(painting.id);
				console.log(store.user.votes);
				if (
					store.user.favourites.find((element) => {
						return element.id === painting.id;
					})
				) {
					newFavourites = store.user.favourites.filter((element) => {
						return element.id === painting.id;
					});
				}
				await api.changeData('users', { ...store.user, favourites: [ ...newFavourites ] });
				await api.changeData('products', { ...painting });
			} else {
				if (
					store.user.favourites.find((element) => {
						return element.id === painting.id;
					})
				) {
					newFavourites = store.user.favourites.filter((element) => {
						return element.id === painting.id;
					});
					await api.changeData('users', { ...store.user, favourites: [ ...newFavourites ] });
				}
			}
		}
	}
	async function like() {
		if (store.user) {
			console.log(store.user);
			if (!store.user.votes.includes(painting.id)) {
				painting.totalVotes++;
				painting.score++;
				store.user.votes.push(painting.id);
				await api.changeData('products', { ...painting });
				
			if (
				!store.user.favourites.find((element) => {
						return element.id === painting.id;
					})
				) {
					store.user.favourites.push(painting);
					await api.changeData('users', { ...store.user });
				}
				
				
				
			} 
		}
	}

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
					<Button variant="danger" block onClick={() => props.onAddProd(painting)}>
						Add to Cart
					</Button>
					<div style={{ paddingBottom: '50%' }}>
						<Button
							variant="secondary"
							className="topandleft"
							onClick={like}
							style={{ width: '48%', marginTop: '10px' }}
						>
							{' '}
							♥ Favorite
						</Button>
						<Button
							variant="secondary"
							style={{ width: '48%', marginTop: '10px', marginLeft: '10px' }}
							onClick={dislike}
						>
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
