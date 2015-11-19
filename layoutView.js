

var Backbone= require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var HeaderView = require('./headerView');
var FooterView = require('./footerView');
var FormView = require('formView');
var FilmView = require('./imbdCollectionView');
var FilmCollection = require('./imdbCollection');

  module.exports = Backbone.View.extend({
    el: ".content", //maybe wrapper and not .filmContent #layoutView
    initialize: function ({
      var self = this;
      var headerHTML = new HeaderView();
      var footerHTML = new FooterView();
      var formHTML = new FormView();
      var filmCollection = new FilmCollection();
      filmCollection.fetch().then(function, (){
        var filmView = new FilmView();
        new FilmView({collection: filmCollection}); //new cv
        self.$el.find('header').html(headerHTML).el();
        self.$el.find('footer').html(footerHTML).el();
        self.$el.find('section').html(formView).el(); //aside
      })
    })
  });
