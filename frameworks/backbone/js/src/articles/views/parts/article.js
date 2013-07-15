/**
 * @name Article
 */

define([
	'marionette',
	'hbs!articles/templates/article_list_item.hbs'
], function(Marionette, template) {

	return Marionette.ItemView.extend({
		tagName: 'li',
		className: 'articles-list-item',
		template: template,

		events: {
			'click .upvote' : 'vote'
		},

		vote: function() {
			this.model.upvote();
		}
	});

});
