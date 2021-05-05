const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orderSchema = new Schema({
	
	time: String,
	total: Number,
	items: [{name: String, price: Number}],
    customer: [{fname: String, email: String, address:String}],
	userId: String
	
});

module.exports = mongoose.model('orders', orderSchema);