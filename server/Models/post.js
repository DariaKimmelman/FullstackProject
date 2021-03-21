const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = new Schema({
	id: Number,
	image: String,
	title: String,
	content: String,
	
});

module.exports = mongoose.model('posts', postSchema);