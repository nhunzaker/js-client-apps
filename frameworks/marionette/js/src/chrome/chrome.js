/**
 * @name Chrome
 * @desc Handles general chrome for the application
 */

define([
	'application',
	'./views/header'
], function(App, Header) {

	var Chrome = App.module('Chrome');

	Chrome.addInitializer(function() {

		App.header.show(
			new Header({ model: App.request("current_user") })
		);

	});

	return Chrome;
});
