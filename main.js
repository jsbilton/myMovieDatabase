// tools we need for this in order to use in JS
var $ = require('jquery');
var _ = require('underscore');
var MovieCollection = require('./imdbCollection');
var MovieModel = require('./imdbModel');
var Backbone = require('backbone');
Backbone.$ = $;



$(function(){

  var movieCollection = new MovieCollection();
  console.log("before fetch: ", movieCollection);
  myModel = new MovieModel ({collection: movieCollection});
  // myModel.save(); //appends to database I think

  movieCollection.fetch().then(function(collectionData){
    console.log(movieCollection);
  });

});
