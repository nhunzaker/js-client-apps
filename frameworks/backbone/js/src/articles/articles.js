/**
 * @name App.Articles
 * @desc Article display and creation management
 */

define([
	'application',
	'./router',
	'./helpers'
], function(App, ArticlesRouter) {

	var ArticlesModule = App.module("Articles");

	ArticlesModule.addInitializer(function() {
		this.router = new ArticlesRouter();
	});

	App.commands.setHandler('articles:visit', function(id) {
		ArticlesModule.router.navigate('articles/' + id, { trigger: true });
	});

	return ArticlesModule;
});
