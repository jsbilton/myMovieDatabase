

var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
  urlRoot: "http://tiny-tiny.herokuapp.com/collections/mymoviedatabase",
  idAttribute: '_id',
  defaults: function() {
    return {
    cover: "http://www.images.hitfix.com/images2/assets/site/poster_default.gif",
    title: "Untitled",
    release: "Unknown",
    plot: "Not applicable"
    };
  },
  initialize: function(){

  }

});
