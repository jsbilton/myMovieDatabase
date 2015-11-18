var $ = require('jquery');
var _ = require('underscore');
var MovieCollection = require ('./imdbModel');
var MovieModel = require ('./imdbModel');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
  urlRoot: "http://tiny-tiny.herokuapp.com/collections/mymoviedatabase",
  idAttribute: '_id',
  defaults: {

    cover: "http://www.images.hitfix.com/images2/assets/site/poster_default.gif",
    title: "Untitled",
    release: "Unknown",
    plot: "Not applicable"
  },
  initialize: function(){

  }

});
