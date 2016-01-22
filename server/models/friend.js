// This is the friend.js file located at /server/models/friend.js
var mongoose = require('mongoose');


// Create friendSchema
var FriendSchema = new mongoose.Schema({
	name: String,
	age: Number
});

//Model that CREATES the collection in the database
mongoose.model('Friend',FriendSchema);
