/**
 * @name View.Form
 * @desc A generalist form view
 */

define(['marionette'], function(Marionette) {

	return Marionette.ItemView.extend({
		action: 'save',
		patch: false,
		events: {
			'submit'  : 'onSubmission',
			'success' : 'onSuccess'
		},

		modelEvents: {
			'invalid' : 'reportError',
			'request' : 'clearErrors'
		},

		ui: {
			form: 'form',
			errors: '.errors-list'
		},

		clearErrors: function() {
			this.ui.errors.empty();
		},

		reportError: function(reasons) {
			this.clearErrors();

			_.each(reasons, function(reason) {
				this.ui.errors.append("<li class='error'>" + reason + "</li>");
			}, this);
		},

		toJSON: function(accepts) {
			var elements = _(this.ui.form.get(0).elements);
			var data = {};

			elements.each(function(el) {
				if (!el.name) return;
				data[el.name] = el.value;
			});

			return data;
		},

		onSubmission: function(e) {
			if (e instanceof $.Event) e.preventDefault();

			var data = this.toJSON();

			return this.model[this.action](data, {
				wait: true,
				patch: this.patch,
				success: function(model) {
					this.trigger('success', model);
				}.bind(this)
			});
		},

		onSuccess: function() {
			// noop
		}

	});

});
