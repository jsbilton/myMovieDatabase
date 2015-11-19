// tools we need for this in order to use in JS
var $ = require('jquery');
var layoutView = require('./layoutView');


$(function(){
  new layoutView();
});




// var movieCollection = new MovieCollection();
// console.log("before fetch: ", movieCollection);
// myModel = new MovieModel ({collection: movieCollection});
// // myModel.save(); //appends to database I think
//
// movieCollection.fetch().then(function(collectionData){
//   console.log(movieCollection);
// });
