/**
 * @name App.Articles
 * @desc Article display and creation management
 */

define([
	'application',
	'./views/index',
	'./router',
	'./helpers'
], function(App, ArticlesList, ArticlesRouter, Handlebars) {

	var ArticlesModule = App.module("Articles");

	ArticlesModule.addInitializer(function() {
		this.router = new ArticlesRouter();
		App.body.show(new ArticlesList());
	});

	return ArticlesModule;
});
