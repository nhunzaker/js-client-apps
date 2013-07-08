/**
 * @name Account/Helpers
 */

define(['handlebars'], function(Handlebars) {

	Handlebars.registerHelper("current_user", function() {
		require('application').request('current_user');
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

});
