/**
 * @name View.Register
 * @desc A register modal that floats from above the page.
 */

define([
	'account/views/login', 
	'../models/user',
	'hbs!account/templates/register.hbs'
], function(Login, User, template) {

	return Login.extend({
		template: template,

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
