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

		events: {
			'dom:refresh' : 'setupRegions'
		},

		modelEvents: {
			'change' : 'render'
		},

		regions: {
			'form' : '.form-comment-wrapper',
			'comments' : '.comments-list-wrapper'
		},

		onDomRefresh: function() {
			this.comments.show(new Comments({ collection: this.collection }));
			this.form.show(new Form({ collection: this.collection }));

			this.form.currentView.on('success', function(m) {
				window.scrollTo(0, $("[data-comment-id=" + m.id + "]").offset().top);
			});
		}

	});

});
