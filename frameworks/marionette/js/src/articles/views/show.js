/**
 * @name Articles/Views/Show
 */

define([
	'marionette',
	'./parts/comments',
	'./parts/comment_form',
	'hbs!articles/templates/show.hbs'
], function(Marionette, Comments, Form, template) {

	return Marionette.Layout.extend({

		template: template,

		onInitializeAfter: function() {
			this.commentsView = new Comments({ collection: this.collection })
			this.formView  = new Form({ collection: this.collection })
		},

		modelEvents: {
			'change' : 'render'
		},

		regions: {
			'form' : '.form-comment-wrapper',
			'comments' : '.comments-list-wrapper'
		},

		onDomRefresh: function() {
			this.comments.show(this.commentsView);
			this.form.show(this.formView);
		}

	});

});
