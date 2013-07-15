/**
 * @name Comment
 * @desc A single comment
 */

define([
	'marionette',
	'hbs!articles/templates/comment.hbs'
], function(Marionette, template) {

	return Marionette.ItemView.extend({
		tagName: 'li',
		className: "articles-list-item",
		attributes: function() {
			return { "data-comment-id": this.model.id };
		},

		template: template
	});

});

