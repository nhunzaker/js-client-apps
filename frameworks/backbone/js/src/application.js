/**
 * @name Application
 * @desc The brain of the application
 */

define([
	'account/app.account',
	'reader/app.reader'
], function(Account, Reader) {

	var auth = new Account();
	var reader = new Reader();

	Backbone.history.start();

	return "Yeah! Backbone!";
});
