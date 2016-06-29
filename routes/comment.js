var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Recipes = require('../models/Recipe.js');
var Authenticate   = require('../middleware/authenticate');
var Validators   = require('../middleware/validation');
var async = require('async');
var o2x = require('object-to-xml');
var converter = require('json-2-csv');
var validator = require('node-validator');

//validation for the adding(update) coment
var checkComment=Validators.validateComment();


//add comment ;id=recipe id
router.put('/push/:id',validator.express(checkComment),function(req, res, next) {
  Recipes.findByIdAndUpdate(req.params.id,
    {$push : {comments:
      {
        $each: req.body.comments
      }
    }},
    {safe: true, upsert:true},
    function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
/*
//add comment ;id=recipe id
router.put('/push/:id',validator.express(checkComment),function(req, res, next) {
  Recipes.findByIdAndUpdate(req.params.id,
    {$push : {comments:req.body.comments}},
    {safe: true, upsert:true},
    function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
*/

//delete coment by coment id ;id=comment id
router.put('/pull/:id',function(req, res, next) {
  Recipes.update(
    {},
    {$pull : {comments:{_id:req.params.id}}},
    {safe: true, upsert:true},
    function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* GET /All comments/id */
router.get('/:id', function(req, res, next) {
  Recipes.findById(req.params.id,'comments', function (err, post) {
    if (err) return next(err);
    var myjson={"doc":[post]};
    //sendData() is send json object throgh a converter middleware
    res.status(200).sendData(myjson);
  });
});



module.exports = router;
