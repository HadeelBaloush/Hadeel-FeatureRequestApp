let mongoose = require('mongoose');
// let ObjectID = require('mongodb').ObjectID;

let Feature = require('../models/features.js');


module.exports = {
	addFeature: function(req, res){
		let feature = req.body;
    return Feature.create(feature, (err, newFeature) => {
      if(err){
        res.json(err);
      } else {
        res.json('Feature Added!'); 
      }     
    });
  },
  deleteFeature: function(req, res){
    let featureId = req.params.id;
    return Feature.findByIdAndRemove(featureId, (err, feature) => {
      if(err){
        res.json(err);
      } else {
        res.json('Feature Deleted!'); 
      }     
    });
  },    
	getAll: function(req, res){
		Feature.find({})
			.exec( (err, challenges) => {
				if(err){
          res.json(err);
        } else {
        	res.json(challenges); 
        } 
			})
	},
	getChallenge(req, res){
  		let challengId = ObjectID(req.params.id);
  		Challenge.findOne({_id: challengId})
			.exec( (err, challenge) => {
				if(err){
          			res.status(500).send(err)
          		} else {
          			if(challenge){
	          			PostController.getAllChallengePosts(challengId, (posts) => {
	          				challenge.set('posts', posts);
	            			res.json(challenge);
	          			});
          			}
          			else{
          				res.status(500).send("No such challenge")
          			}

          		} 
			})

	},
  
}