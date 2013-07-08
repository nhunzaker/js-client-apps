/**
 * @name View.Form
 * @desc A generalist form view
 */

define(['marionette'], function(Marionette) {

	return Marionette.ItemView.extend({
		action: 'save',

		events: {
			'submit' : 'handleSubmission'
		},

		ui: {
			form: 'form',
			errors: '.errors-list'
		},

		clearErrors: function() {
			this.ui.errors.empty();
		},

		reportError: function(reason) {
			this.ui.errors.append("<li class='error'>" + reason + "</li>");
		},

		toJSON: function() {
			var elements = _(this.ui.form.get(0).elements);
			return _.object(elements.pluck('name'), elements.pluck('value'));
		},

		handleSubmission: function(e) {
			if (e instanceof $.Event) e.preventDefault();

			var data = this.toJSON();

			return this.model[this.action](data);
		}

	});

});
