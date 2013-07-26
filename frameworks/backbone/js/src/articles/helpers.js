/**
 * @name Articles/Helpers
 */

define(['handlebars'], function(Handlebars) {

	Handlebars.registerHelper("article_create_url", function() {
		return "#/articles/create";
	});

	Handlebars.registerHelper("upvote_link", function() {
		var hasUser = require('application').request('current_user?');
 		var result = hasUser? '<span class="js-upvote">&#9650;</span>' : '';
		return new Handlebars.SafeString(result);
	});

	Handlebars.registerHelper("article_url", function(id) {
		return "#/articles/" + id;
	});

});
