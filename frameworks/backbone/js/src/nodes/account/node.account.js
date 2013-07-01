/**
 * @name Node.Account
 * @desc Handles account settings and authentication
 */

define([
	'nodes/node.base', 
	'models/model.account'
], function(Node, Account) {

	return Node.extend({

		routes: {
			'account/edit': 'edit',
			'account/login': 'login',
			'account/logout': 'logout',
			'account/register': 'register'
		},

		initialize: function() {
			this.user = new Account();

			if (sessionStorage['token']) {
				this.user.set('token', sessionStorage['token']);
			}

			if (this.user.isAuthenticated() === false) {
				this.account.destroyToken();
			}

			this.user.on('change:token', this.saveToken, this);

			Backbone.on({

				'account:authenticated': function() {
					this.navigate('/', { trigger: true });
				},
				'account:unauthenticated': function() {
					this.navigate('account/login', { trigger: true });
				}

			}, this);

		},

		saveToken: function() {
			var token = this.user.get('token');
			token && (sessionStorage['token'] = token);
		},

		destroyToken: function() {
			sessionStorage.removeItem('token');
			this.user.clear();
			Backbone.trigger('account:unauthenticated');
		},

		noSession: function() {
			var pass = this.user.isAuthenticated();
			if (!pass) this.navigate("account/login", { trigger: true });
			return !pass;
		},

		edit: function() {

			var user = this.user;

			if (this.noSession()) return;

			require(['account/views/view.edit'], function(Edit) {

				var edit = new Edit({
					el: "#body",
					model: user
				});

				edit.render().$el.appendTo("body");

			});

		},

		login: function() {

			var user = this.user;

			require(['account/views/view.login'], function(Login) {

				var login = new Login({
					el: "#modals",
					model: user
				});

				login.render().$el.appendTo("body");

			});

		},

		logout: function() {
			this.destroyToken();
		},

		register: function() {

			var user = this.user;

			if (this.noSession()) return;

			require(['account/views/view.register'], function(Register) {

				var register = new Register({
					el: "#modals",
					model: user
				});

				register.render().$el.appendTo("body");

			});

		}


	});

});
