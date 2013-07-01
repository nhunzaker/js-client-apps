/**
 * @name View.Login
 * @desc A login model that floats from above the page.
 */

define([
	'backbone', 
	'tpl!account/templates/login.tpl'
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

		render: function(errors) {
			var data = _.extend(this.model.toJSON(), {
				errors: errors || []
			});

			this.$el.html(this.template(data));

			return this;
		},

		login: function(e) {
			e.preventDefault();

			var form = e.target;

			var ask = this.model.authenticate({ 
				email: form.elements.email.value,
				password: form.elements.password.value
			});

			ask.done(function() {
				Backbone.trigger("account:authenticated");
			}.bind(this));

			ask.fail(function(data) {
				this.render(data.responseJSON.errors);
			}.bind(this));
		}

	});

});
