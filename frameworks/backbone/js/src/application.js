/**
 * @name Application
 * @desc The brain of the application
 */

define([
	'backbone', 
	'marionette',
	'src/helpers'
], function(Backbone, Marionette) {

	Marionette.$.ajaxSetup({
		headers: {
			"Content-Type": "application/json"
		}
	});

	var Application = new Marionette.Application();

	Application.on('initialize:after', function() {
		Backbone.history.start();
	});

	Application.addRegions({
		header : "#header",
		modals : "#modals",
		body   : "#body"
	});

	return Application;
});
