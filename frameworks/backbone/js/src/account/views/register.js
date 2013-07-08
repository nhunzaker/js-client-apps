/**
 * @name View.Register
 * @desc A register modal that floats from above the page.
 */

define([
	'chrome/views/form', 
	'../models/user',
	'hbs!account/templates/new.hbs'
], function(Form, User, template) {

	return Form.extend({
		template: template,

		render: function() {
			this.$el.html(this.template());
			return this;
		},

		handleSubmission: function(e) {
			if (e instanceof $.Event) e.preventDefault();

			var user = new User(this.toJSON());
			var ask = user.save();

			ask.done(function() {
				this.model.set(user.toJSON());
				this.model.authenticate();
			}.bind(this));
		}

	});

});
