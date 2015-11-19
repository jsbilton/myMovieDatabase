

var MovieModel = require ('./imdbModel');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.Collection.extend({
  url: "http://tiny-tiny.herokuapp.com/collections/mymoviedatabase",
  model: MovieModel,
  // initialize: function(){
  //
  // }
});
