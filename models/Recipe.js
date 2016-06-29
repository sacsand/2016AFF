var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;
//var user = require('../models/user.js');


var RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    },
  description:String,
  ingredients:[{
    amt:Number,
    unit:String,
    name:String,
  }],
  tags:Array,
  comments:[{
          user:Number,
          coment:String,
          created_at:{type: Date, default: Date.now},
  }],
  note: String,
  published_by:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  publiished_at:{ type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

RecipeSchema.plugin(mongoosePaginate);

var Recipe =mongoose.model('Recipe', RecipeSchema);
module.exports = Recipe;
