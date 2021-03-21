const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
	fname: String,
	lname: String,
	email: String,
	password: String
	// favourites: [{id: Number,
    //     pic: String,
    //     name: String,
    //     author: String,
    //     price: Number,
    //     medium: String,
    //     size: String,
    //     subject: String,
    //     totalVotes: Number,
    //     score: Number,
    //     instock: Boolean}],
	// votes:[{id: Number}],


});

module.exports = mongoose.model('users', userSchema);