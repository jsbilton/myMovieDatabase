

var $ = require('jquery');
var _ = require('underscore');
var MovieCollection = require ('./imdbCollection');
var MovieModelView = require ('./imdbModelView');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.Collection.extend({
  tagName:'section',
  className: 'filmContent', //wrapper, .filmContent, #layoutView
  template: _.template($('#myMovieDatabase').html()),
  render: function () {
    var markup = this.template(this.model.toJSON));
    this.$el.html(markup);
    return this;
  },
  initialize: function(){

  }
});
