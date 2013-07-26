/**
 * @name Articles/Views/Index
 */

define([
	'marionette',
	'./parts/article',
	'articles/collections/articles',
	'hbs!articles/templates/index.hbs'
], function(Marionette, ArticleView, ArticlesCollection, template) {

	return Marionette.CompositeView.extend({
		template: template,
		itemView: ArticleView,
		itemViewContainer: '.articles-list',

		collectionEvents: {
			'sort' : 'render'
		},

		initialize: function() {
			this.collection = new ArticlesCollection();
			this.collection.fetch();
		}
	});

});
