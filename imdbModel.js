

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: "http://tiny-tiny.herokuapp.com/collections/mymoviedatabase",
  idAttribute: '_id',
  defaults: function() {
    return {
      cover: "http://www.images.hitfix.com/images2/assets/site/poster_default.gif",
      title: "Rocchell, Rocchell: The Musical",
      director: "Allan Smithee",
      release: "1992",
      plot: "It's the story of Rocchell, Rocchell. A young girl's journey from Milan to Minsk."
    };
  },
  delete: function (){
  event.preventDefault();
  // this.destroy
  // this.$el.remove
  
},
  initialize: function(){

  }

});
