// Not in the DOM -- dedicated to creating a chunk of markup we put into DOM with collectionView
// Movie View


var $ = require('jquery');
var _ = require('underscore');
var tmpl = require('./templates');
var MovieCollection = require('./imdbCollection');
var MovieModelView = require('./imdbModelView');
var Backbone = require('backbone');
Backbone.$ = $;

module.exports = Backbone.Collection.extend({
  tagName:'section', //default is a <div>
  className: " ", // #layoutView
  template: _.template(tmpl.film), //model
  render: function () {
    var markup = this.template(this.model.toJSON));
    this.$el.html(markup); //throws into the element
    return this;
  },
  initialize: function(){

  }
});
