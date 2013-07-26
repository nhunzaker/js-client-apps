/**
 * @name Articles/Views/Index
 */

define([
	'marionette',
	'./parts/article',
	'hbs!articles/templates/index.hbs'
], function(Marionette, ArticleView, template) {

	return Marionette.CompositeView.extend({
		template: template,
		itemView: ArticleView,
		itemViewContainer: '.articles-list',

		collectionEvents: {
			'sort' : 'render'
		},

		initialize: function() {
			this.collection.fetch();
		}
	});

});