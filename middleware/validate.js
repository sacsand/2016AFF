var validator = require('node-validator');

module.exports = {

checkr : function checking(req,res){

   var check = validator.isObject()
  .withRequired('name', validator.isNumber()
  .);


}
}

/*
module.exports = {


checkr : function checking(req,res,next){
  res.sendError = function(obj){

   var check = validator.isObject()
  .withRequired('name', validator.isNumber());

   validator.run(check,req.body,function(errorCount, errors) {
    console.log(errors);

  //    return errors;
});
res.json(obj);
}
}
}
*/
