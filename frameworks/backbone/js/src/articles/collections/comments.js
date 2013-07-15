/**
 * @name Collection.Comments
 */

define(['backbone', '../models/comment'], function(Backbone, Comment) {

	return Backbone.Collection.extend({
		model: Comment,

		initialize: function(options) {
			if ('article' in options) {
				this.article = options.article;
			} else {
				throw Error("Comments collection requires an article");
			}
		},

		url: function() {
			return '/articles/' + this.article.id + '/comments';
		}
	});

});
