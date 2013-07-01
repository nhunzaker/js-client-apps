/**
 * @name View.Login
 * @desc A login model that floats from above the page.
 */

define([
	'backbone', 
	'tpl!apps/account/templates/login.tpl'
], function(Backbone, template) {

	return Backbone.View.extend({

		template: template,

		events: {
			'submit' : 'login'
		},

		initialize: function() {
			this.listenTo(this.model, 'change:token', function(model) {
				if (model.has('token')) this.remove();
			});
		},

		render: function() {
			this.$el.html(this.template());
			return this;
		},

		login: function(e) {

			var form = e.target;

			e.preventDefault();

			this.model.set({ 
				email: form.elements.email.value,
				password: form.elements.password.value
			});

			var ask = this.model.authenticate();

			ask.done(function() {
				console.log("success!");
			});

		}

	});

});
