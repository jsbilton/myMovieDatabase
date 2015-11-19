
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var FilmModel = require('./model');


  module.exports = Backbone.View.extend({
    className: 'addFilm', //bootstrap name like col-md-6?
    events:{
      'click .submit': 'onAddFilm'
    },
    initialize: function () {
      if (!this.model) {
        this.model = new FilmModel();
      }
    },
    onAddFilm: function (event) {
      event.preventDefault();
      var newFilm = {
        cover: this.$el.find('input[name="cover"]').val(),
        title: this.$el.find('input[name="title"]').val(),
        director:this.$el.find('input[name="director"]').val(),
        release: this.$el.find('input[name="release"]').val(),
        plot: this.$el.find('input[name="plot"]').val()
      };
      this.model.set(newFilm);
      this.model.save();
      this.$el.find('input, textarea').val('');
    },
    template:_.template(tmpl.form),

    render: function () {
      var markup = this.template(this.model.toJSON());
      this.$el.html(markup);
      return this;

});
