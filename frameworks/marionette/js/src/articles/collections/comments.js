/**
 * @name Collection.Comments
 */

define([
	'backbone',
	'../models/article',
	'../models/comment'
], function(Backbone, Article, Comment) {

	return Backbone.Collection.extend({
		model: Comment,

		comparator: function(a, b) {
			return a.get('points') < b.get('points')
		},

		initialize: function (models, options) {
			if ('parent' in options) {
				this.parent = options.parent;
			} else {
				throw Error("Expected a parent option!");
			}

			this.fetch();
		},

		url: function() {
			var type = false

			if (this.parent instanceof Article) {
				type = 'articles'
			} else if (this.parent instanceof Comment) {
				type = 'comments'
			} else {
				throw Error("Expected an Article or Comment model!");
			}

			return '/' + type + '/' + this.parent.id + '/comments';
		}
	});

});
