/**
 * @name Account/Helpers
 */

define(['handlebars'], function(Handlebars) {

	Handlebars.registerHelper("current_user", function() {
		return require('application').request('current_user').id;
	});

	Handlebars.registerHelper("with_current_user", function(options) {
		var user = require('application').request('current_user');
		if (user.isNew()) {
			return options.inverse()
		} else {
			var context = user.toJSON();
			context.origin = this;
			return options.fn(context);
		}
	});

	Handlebars.registerHelper("account_edit_url", function() {
		return "#/account/edit";
	});

	Handlebars.registerHelper('login_url', function() {
		return "#/account/login";
	});

	Handlebars.registerHelper('logout_url', function() {
		return "#/account/logout";
	});

	Handlebars.registerHelper('registration_url', function() {
		return "#/account/register";
	});

});
