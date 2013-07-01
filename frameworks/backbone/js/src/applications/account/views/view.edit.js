/**
 * @name View.Register
 * @desc A register modal that floats from above the page.
 */

define([
	'backbone', 
	'tpl!apps/account/templates/edit.tpl'
], function(Backbone, template) {

	return Backbone.View.extend({

		template: template,

		events: {
			'submit' : 'update'
		},

		render: function() {
			var markup = this.template(this.model.toJSON());
			this.$el.html(markup);
			return this;
		},

		update: function(e) {

			var fields = e.target.elements;

			e.preventDefault();

			var save = this.model.save({
				username: fields.username.value,
				password: fields.password.value,
				password_confirmation: fields.password_confirmation.value
			});

			save.done(function() {
				alert("Success!");
			});

			save.fail(function() {
				console.error(arguments);
			});

		}

	});

});
