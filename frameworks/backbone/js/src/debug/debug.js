/**
 * @name Debug
 * @desc A debugging tool to make life easier.
 */

define([
	'application',
	'./collections/api_harvester',
	'articles/collections/articles'
], function(App, Harvester, Articles) {

	// Harvest articles from the unofficial hacker news API
	// see http://api.ihackernews.com/
	App.commands.setHandler("articles:harvest", function() {
		var harvester = new Harvester();
		var articles = new Articles();
		var count = 0;

		$.when(harvester.fetch(), articles.fetch()).then(function() {

			harvester.each(function(model) {
				var included = articles.findWhere({ title: model.get('title') });
				if (!included) {
					articles.create(model.toJSON());
					count ++;
				}
			});

			console.log("Done. Created %s articles", count);
		});
	});

});
