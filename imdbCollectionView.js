var $ = require('jquery');
var _ = require('underscore');
var MovieCollection = require ('./imdbCollection');
var MovieModel = require ('./imdbModel');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  // url: "http://tiny-tiny.herokuapp.com/collections/mymoviedatabase",
  el: "",
  events:{
    'click button': 'submitForm'
  },
  delete: function(event){
    event.preventDefault();

  },
  submitForm: function(event){
    event.preventDefault();
    var poster = this.$('#').val();

  },
  addOne: function (filmModel){

    var photoView = new PhotoView ({model: filmModel});
    this.$el.append(photoView.render().el);
  },
  addAll: function(){
    _.each(this.collection.films, this.addOne, this);

  },
  initialize: function(){
    this.addAll();
  }
});
