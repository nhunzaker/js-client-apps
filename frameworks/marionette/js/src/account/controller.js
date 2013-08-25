/**
 * @name Account/Controller
 */

define([
	'marionette',
	'application',
	'./views/login',
	'./views/register',
	'./views/edit'
], function(Marionette, App, LoginView, RegisterView, EditView) {

	return Marionette.Controller.extend({

		session: function() {
			var loggedIn = App.request("current_user").isAuthenticated();
			if (!loggedIn) App.Account.router.navigate("account/login", { trigger: true });
			return loggedIn;
		},

		edit: function() {
			this.session() && App.body.show(
				new EditView({ model: App.request("current_user") })
			);
		},

		login: function() {
			App.modals.show(
				new LoginView({ model: App.request("current_user") })
			);
		},

		logout: function() {
			App.execute("account:session:destroy");
		},

		register: function() {
			App.body.show(
				new RegisterView({ model: App.request("current_user") })
			);
		}

	});


});
