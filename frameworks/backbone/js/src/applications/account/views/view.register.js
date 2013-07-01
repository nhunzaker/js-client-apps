/**
 * @name View.Register
 * @desc A register modal that floats from above the page.
 */

define([
	'backbone', 
	'tpl!apps/account/templates/register.tpl',
	'models/model.user'
], function(Backbone, template, User) {

	return Backbone.View.extend({

		template: template,

		events: {
			'submit' : 'register'
		},

		render: function() {
			this.$el.html(this.template());
			return this;
		},

		register: function(e) {

			var form = e.target;

			e.preventDefault();

			var user = new User({
				username: form.elements.username.value,
				email: form.elements.email.value,
				password: form.elements.password.value,
				password_confirmation: form.elements.password_confirmation.value
			});

			var ask = user.save();

			ask.done(function() {
				this.model.set(user.toJSON());
				this.model.authenticate();
			}.bind(this));

		}

	});

});
