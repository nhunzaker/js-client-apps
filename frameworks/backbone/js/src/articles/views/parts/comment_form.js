/**
 * @name CommentForm
 */

define([
	'chrome/views/form',
	'hbs!articles/templates/comment_form.hbs'
], function(Form, template) {

	return Form.extend({
		template: template,

		handleSubmission: function(e) {
			if (e instanceof $.Event) e.preventDefault();

			var ask = this.collection.create(this.toJSON(), {
				wait: true,
				success: function(model) {
					this.render();
					this.trigger('success', model);
				}.bind(this)
			});
		}
	});
});
