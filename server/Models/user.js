const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
	fname: String,
	lname: String,
	email: String,
	password: String,
	 favourites: Array,
     votes:Array,
     isAdmin: Boolean,
	 


});

module.exports = mongoose.model('users', userSchema);