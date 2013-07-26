/**
 * @name Node.Account
 * @desc Handles account settings and authentication
 */

define([
	'application',
	'account/models/account',
	'account/router',
	'account/helpers'
], function(App, AccountModel, AccountRouter) {

	var AccountModule = App.module("Account");

	AccountModule.user = new AccountModel();

	AccountModule.addInitializer(function() {
		this.router = new AccountRouter();
	});

	// Creates a request handler to get the current user
	App.reqres.setHandler('current_user', function() {
		return AccountModule.user;
	});

	App.reqres.setHandler('current_user?', function() {
		return !AccountModule.user.isNew();
	});

	App.commands.setHandler('account:session:destroy', function() {
		AccountModule.user.destroyToken();
	});

	return AccountModule;
});
