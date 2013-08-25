/**
 * @name ApiHarvester
 * @desc A collection for harvesting the latest data from hacker news
 */

define(['backbone'], function(Backbone) {

	return Backbone.Collection.extend({
		url: "http://api.ihackernews.com/page?format=jsonp&callback=?",

		parse: function(data) {
			return data.items.map(function(post) {
				return { title: post.title, url: post.url };
			});
		}
	});

});
