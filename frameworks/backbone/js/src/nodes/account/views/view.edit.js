/**
 * @name View.Register
 * @desc A register modal that floats from above the page.
 */

define([
	'backbone', 
	'tpl!account/templates/edit.tpl'
], function(Backbone, template) {

	return Backbone.View.extend({

		template: template,

		events: {
			'submit' : 'update'
		},

		render: function(errors) {
			var data = _.extend(this.model.toJSON(), {
				errors: errors || []
			});

			this.$el.html(this.template(data));

			return this;
		},

		update: function(e) {
			e.preventDefault();

			var fields = e.target.elements;

			var save = this.model.save({
				username: fields.username.value,
				password: fields.password.value,
				password_confirmation: fields.password_confirmation.value
			});

			save.done(function() {
				alert("Success!");
			});

			save.fail(function(data) {
				this.render(data.responseJSON.errors);
			});

		}

	});

});
