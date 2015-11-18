// Calvin Demo
// var Backbone = require('backbone');
// var $ = require('jquery');
// Backbone.$ = $;
// var _ = require('underscore');
// var HeaderView = require('./headerView');
// var FooterView = require('./footerView');
// var FormView = require('./formView');
// var BooksView = require('./collectionView');
// var BookCollection = require('./collection');
//
//
// module.exports = Backbone.View.extend({
//   el: '#layoutView',
//   initialize: function () {
//     var self = this;
//     var headerHTML = new HeaderView();
//     var footerHTML = new FooterView();
//     var formHTML = new FormView();
//     var bookCollection = new BookCollection();
//     bookCollection.fetch().then(function () {
//       var booksView = new BooksView({collection: bookCollection});
//       // self.$el.find('section').html()
//       self.$el.find('header').html(headerHTML.render().el);
//       self.$el.find('footer').html(footerHTML.render().el);
//       self.$el.find('aside').html(formHTML.render().el);
//     });
//
//
//   }
//
// });
