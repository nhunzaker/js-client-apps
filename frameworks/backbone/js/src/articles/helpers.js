/**
 * @name Articles/Helpers
 */

define(['handlebars'], function(Handlebars) {

	Handlebars.registerHelper("article_create_url", function() {
		return "#/articles/create";
	});

	Handlebars.registerHelper("article_url", function(id) {
		return "#/articles/" + id;
	});

});
