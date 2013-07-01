/**
 * @name Collection.Articles
 */

define(['backbone', 'models/model.article'], function(Backbone, Article) {

	return Backbone.Collection.extend({
		model: Article,
		url: '/articles'
	});

});
