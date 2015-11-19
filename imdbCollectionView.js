

var $ = require('jquery');
var _ = require('underscore');
var MovieCollection = require ('./imdbCollection');
var MovieModel = require ('./imdbModel');
var Backbone = require('backbone');
Backbone.$ = $;

  module.exports = Backbone.View.extend({
  el: "#filmForm",  
  initialize: function(){
    this.addAll();

  },
// retrieve photos
  addOne: function (filmModel){
    var photoView = new PhotoView ({model: filmModel}); //setting
    this.$el.append(photoView.render().el);

  },
  addAll: function(){
    _.each(this.collection.models, this.addOne, this);
    //iterating over collection of modesl it is merging with photoView (backbone view) and call render on that view
    //pass in collection we have instantiated
  }

});
