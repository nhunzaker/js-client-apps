/**
 * @name Articles/Controller
 */

define([
	'marionette', 
	'application',
	'./views/create'
], function(Marionette, App, CreateView) {

	return Marionette.Controller.extend({

		create: function() {
			App.body.show(new CreateView());
		}

	});

});
