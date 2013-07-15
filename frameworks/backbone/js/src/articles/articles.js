/**
 * @name App.Articles
 * @desc Article display and creation management
 */

define([
	'application',
	'./router',
	'./helpers'
], function(App, ArticlesRouter, Handlebars) {

	var ArticlesModule = App.module("Articles");

	ArticlesModule.addInitializer(function() {
		this.router = new ArticlesRouter();
	});

	App.commands.setHandler('articles:visit', function(id) {
		this.router.navigate('articles/' + id, { trigger: true });
	});

	return ArticlesModule;
});
