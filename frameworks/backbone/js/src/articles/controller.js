/**
 * @name Articles/Controller
 */

define([
	'marionette',
	'application',
	'./models/article',
	'./collections/articles',
	'./collections/comments',
	'./views/index',
	'./views/create',
	'./views/show'
], function(Marionette, App, Article, Articles, Comments, IndexView, CreateView, ShowView) {

	return Marionette.Controller.extend({
		index: function() {
			var articles = new Articles();
			var view = new IndexView({ collection: articles });

			App.body.show(view);
		},

		create: function() {
			var view = new CreateView({ model: new Article() });
			App.body.show(view);
		},

		show: function(id) {
			var article = new Article({ id: id });
			var comments = new Comments([], { parent: article });

			article.fetch();
			comments.fetch();

			var view = new ShowView({ model: article, collection: comments });

			App.body.show(view);
		}

	});

});
