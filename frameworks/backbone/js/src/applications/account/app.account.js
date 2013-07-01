/**
 * @name App.Account
 * @desc Handles account settings and authentication
 */

define([
	'apps/app.base', 
	'models/model.account',
	'apps/account/views/view.header'
], function(App, Account, Header) {

	return App.extend({

		routes: {
			'account/edit': 'edit',
			'account/login': 'login',
			'account/logout': 'logout',
			'account/register': 'register'
		},

		initialize: function() {
			this.user = new Account();
			this.user.set('token', sessionStorage['token']);
			this.render();

			this.user.on('change:token', this.saveToken, this);
		},

		saveToken: function() {
			sessionStorage['token'] = this.user.get('token');
		},

		destroyToken: function() {
			delete sessionStorage['token'];
			this.user.clear();
		},

		render: function() {
			this.header = new Header({ model: this.user });
			this.header.setElement("#header");
			this.header.render();
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
			this.navigate('/', { trigger: true });
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
