/**
 * @name Articles/Router
 */

define([
	'marionette',
	'application',
	'./controller'
], function(Marionette, App, Controller) {

	return Marionette.AppRouter.extend({

		// For this to work, a controller must be set, we do this
		// when initializing
		appRoutes: {
			'articles/create'  : 'create'
		},

		initialize: function() {
			this.controller = new Controller();
		}

	});

});
