/**
 * @name Articles/Controller
 */

define([
	'marionette',
	'application',
	'./models/article',
	'./collections/comments',
	'./views/index',
	'./views/create',
	'./views/show'
], function(Marionette, App, Article, Comments, IndexView, CreateView, ShowView) {

	return Marionette.Controller.extend({
		index: function() {
			App.body.show(new IndexView());
		},

		create: function() {
			var view = new CreateView({ model: new Article() });
			App.body.show(view);
		},

		show: function(id) {
			var article = new Article({ id: id });

			var view = new ShowView({
				model      : article,
				collection : new Comments([], { parent: article })
			});

			App.body.show(view);
		}
	});
});
