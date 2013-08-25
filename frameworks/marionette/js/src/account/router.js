/**
 * @name Account/Router
 */

define([
	'marionette',
	'application',
	'account/controller'
], function(Marionette, App, Controller) {

	return Marionette.AppRouter.extend({

		// For this to work, a controller must be set, we do this
		// when initializing
		appRoutes: {
			'account/edit'     : 'edit',
			'account/login'    : 'login',
			'account/logout'   : 'logout',
			'account/register' : 'register'
		},

		initialize: function() {
			this.controller = new Controller();
		}
	});
});
