/**
 * @name Model.Account
 * @desc Describes the current user.
 * @extends Model.User
 */

define(['models/model.user'], function(User) {

	return User.extend({

		url: '/account',

		initialize: function() {

			this.on('change:token', function() {
				console.info("Current user authenticated with token %s", this.get('token'));
				return this.fetch();
			});

		},

		setHeaders: function() {

			Backbone.$.ajaxSetup({
				headers: {
					"Content-Type": "application/json",
					"X-User-Token" : this.get('token')
				}
			});

		},

		authenticate: function() {
			return this.save({}, {
				attrs: this.pick('email', 'password'),
				url: '/session',
				method: 'post'
			});
		},

		isAuthenticated: function() {
			return this.has('token');
		},

		sync: function(model, method, options) {
			this.has('token') && this.setHeaders();
			return Backbone.sync.apply(this, arguments);
		}

	});

});
