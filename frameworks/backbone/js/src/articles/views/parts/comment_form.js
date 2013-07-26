/**
 * @name CommentForm
 */

define([
	'chrome/views/form',
	'hbs!articles/templates/comment_form.hbs'
], function(Form, template) {

	return Form.extend({
		template: template,

		goToComment: function(id) {
			window.scrollTo(0, $("[data-comment-id=" + model.id + "]").offset().top);
		},

		onSuccess: function(model) {
			this.render();
			this.goToComment(model.id);
		},

		onSubmission: function(e) {
			if (e instanceof $.Event) e.preventDefault();

			var data = this.toJSON();

			return this.collection.create(data, {
				wait: true,
				url: this.collection.url(),
				success: function(model) {
					this.$el.trigger('success', model);
				}.bind(this),
				error: function() {
					console.error(arguments);
				}
			});
		}
	});

});
