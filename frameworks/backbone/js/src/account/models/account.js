/**
 * @name Model.Account
 * @desc Describes the current user.
 * @extends Model.User
 */

define(['backbone', 'application', './user'], function(Backbone, App, User) {

	return User.extend({

		url: '/account',

		initialize: function() {
			this.on('change:token', this.handleTokenUpdate);

			if (sessionStorage['token']) {
				this.set('token', sessionStorage['token']);
			}
		},

		handleTokenUpdate: function() {
			var token = this.get('token');

			if (token) {
				console.info("Current user authenticated with token %s", token);
				this.fetch();
			}

			this.saveToken();
		},

		setHeaders: function() {
			Backbone.$.ajaxSetup({
				headers: {
					"X-User-Token" : this.get('token')
				}
			});
		},

		reportAuthenticationFailure: function(model, data) {
			if ("errors" in data.responseJSON === false) return;

			_.each(data.responseJSON.errors, function(e) {
				model.trigger('invalid', e);
			});

			this.destroyToken();
		},

		authenticate: function(attrs, scope) {
			this.trigger("request:authentication", this);

			this.set(attrs, { silent: true });

			return this.save({}, {
				attrs: this.pick('email', 'password'),
				url: '/session',
				method: 'post',
				success: function(model, data) {
					model.trigger('sync:authentication', model);
				},
				error: this.reportAuthenticationFailure
			});
		},

		isAuthenticated: function() {
			return this.has('token');
		},

		saveToken: function() {
			var token = this.get('token');
			token && (sessionStorage['token'] = token);
		},

		destroyToken: function() {
			sessionStorage.removeItem('token');
			this.clear();
		},

		sync: function(model, method, options) {
			this.has('token') && this.setHeaders();
			return Backbone.sync.apply(this, arguments);
		}

	});

});
