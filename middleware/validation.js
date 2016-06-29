
var validator = require('node-validator');



module.exports = {

  validateRecipe: function(){

      var checkIngrediens = validator.isObject()
        .withRequired('amt', validator.isNumber())
        .withRequired('name', validator.isString())
        .withRequired('unit', validator.isString());

      var checkRecipe = validator.isObject()
        .withRequired('name', validator.isString())
        .withRequired('description', validator.isString())
        .withRequired('ingredients',validator.isArray(checkIngrediens))
        .withRequired('tags',validator.isArray())
        .withRequired('note',validator.isString());

        return checkRecipe;
        next();
   },

  validateComment: function(){

      var checkInside = validator.isObject()
        .withRequired('coment', validator.isString())
        .withRequired('user', validator.isNumber());


      var checkComment = validator.isObject()
        .withRequired('comments',validator.isArray(checkInside));

      return checkComment;
  },

  validateIngredients: function(){

      var checkInside = validator.isObject()
        .withRequired('amt', validator.isNumber())
        .withRequired('name', validator.isString())
        .withRequired('unit', validator.isString());


      var checkIngrad = validator.isObject()
        .withRequired('ingredients',validator.isArray(checkInside));

      return checkIngrad;
  }





}