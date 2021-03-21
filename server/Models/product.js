const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
	id: Number,
	pic: String,
	name: String,
	author: String,
	price: Number,
	medium: String,
	size: String,
	subject: String,
	totalVotes: Number,
	score: Number,
	instock: Boolean
});

module.exports = mongoose.model('products', productSchema);
