/**
 * @name Model.Account
 * @desc Describes the current user.
 * @extends Model.User
 */

define(['models/model.user'], function(User) {

	return User.extend({

		url: '/account',

		initialize: function() {
			this.on({
				'change:token': this.handleTokenUpdate
			});
		},

		handleTokenUpdate: function() {
			var token = this.get('token');

			if (token) {
				console.info("Current user authenticated with token %s", token);
				this.fetch();
			}
		},

		setHeaders: function() {
			Backbone.$.ajaxSetup({
				headers: {
					"Content-Type": "application/json",
					"X-User-Token" : this.get('token')
				}
			});
		},

		authenticate: function(attrs) {
			this.set(attrs, { silent: true });
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
