var friends = require('./../controllers/friends.js');
module.exports = function(app) {

app.get('/friends', function(req,res){
	friends.index(req,res);
});

app.post('/friends/add', function(req,res){
	friends.add(req,res);
	});

};