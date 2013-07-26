/**
 * @name Comment
 * @desc A single comment
 */

define([
	'marionette',
	'./comment_reply',
	'articles/collections/comments',
	'hbs!articles/templates/comment.hbs'
], function(Marionette, ReplyForm, CommentsCollection, template) {

	return Marionette.Layout.extend({
		attributes: function() {
			return { "data-comment-id": this.model.id };
		},
		className: "articles-list-item",
		tagName: 'li',
		template: template,

		events: {
			"click .js-reply": 'showForm',
			'click .upvote' : 'vote'
		},

		modelEvents: {
			'change' : 'render'
		},

		regions: {
			form: ".form-comment-wrapper",
			comments: ".comments-list-wrapper"
		},

		addCommentForm: function() {
			var form = new ReplyForm({ collection: this.collection })
			this.form.show(form);
		},

		addChildComments: function() {
			// Require the CommentsView inline to prevent circular dependencies
			var CommentsView = require('articles/views/parts/comments');
			var children = new CommentsView({ collection: this.collection });
			this.comments.show(children);
		},

		onDomRefresh: function() {
			this.collection = new CommentsCollection([], { parent: this.model });
			this.collection.fetch();

			this.addCommentForm();
			this.addChildComments();
		},

		hideForm: function() {
			this.form.$el.hide();
			return false;
		},

		showForm: function() {
			this.form.$el.show();
			return false;
		},

		vote: function(e) {
			// Only vote for the current comment, not children!
			var id = $(e.currentTarget).closest(".articles-list-item").data("comment-id")

			if (id === this.model.id) {
				this.model.upvote();
			}

			return false;
		}
	});
});
