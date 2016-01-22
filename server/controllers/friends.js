var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function() {
    return {
        index: function(req,res){
        	Friend.find({},function(err,results){
        		if(err) {
        			console.log(err);
        		} else{
        			res.json(results);
        		}

        	})
        },
        add: function(req,res){
            var newFriend = new Friend({name: req.body.name, age: req.body.age});
            //save the database
            newFriend.save(function(err,data){
                if(err){//log the error
                        console.log("Error.");
                    }
                else{ // refresh the page
                    res.redirect('/');
                }

            })

        }
    }
})();


