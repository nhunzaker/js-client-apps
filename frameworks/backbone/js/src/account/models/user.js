/**
 * @name Model.User
 * @desc The fundamental data structure for a user.
 */

define(['backbone'], function(Backbone) {

	return Backbone.Model.extend({

		urlRoot: '/users',

		defaults: {
			email: "no@email.com",
			username: "No User",
			token: false
		}

	});

});
