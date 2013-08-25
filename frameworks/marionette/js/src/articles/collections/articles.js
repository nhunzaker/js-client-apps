/**
 * @name Collection.Articles
 */

define(['backbone', '../models/article'], function(Backbone, Article) {

	return Backbone.Collection.extend({
		model: Article,
		url: '/articles',
		comparator: function(a, b) {
			return a.get('points') < b.get('points')
		}
	});

});
