

var $ = require('jquery');
var _ = require('underscore');
var MovieCollection = require ('./imdbCollection');
var MovieModel = require ('./imdbModel');
var Backbone = require('backbone');
Backbone.$ = $;

  module.exports = Backbone.View.extend({
  el: "#layoutView",  //wrapper, #layoutView, .filmContent
  initialize: function(){
    this.addAll();

  },
  addOne: function (filmModel){
    var photoView = new PhotoView ({model: filmModel});
    this.$el.append(photoView.render().el);

  },
  addAll: function(){
    _.each(this.collection.films, this.addOne, this);
  }

});
