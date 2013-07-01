/**
 * @name Application
 * @desc The brain of the application
 */

define([
	'backbone',
	'account/node.account',
	'articles/node.articles',
	'chrome/node.chrome'
], function(Backbone, Account, Articles, Chrome) {

	var Application = Backbone.View.extend({

		el: document.body,

		initialize: function() {
			this.account = new Account();
			this.articles = new Articles();
			this.chrome = new Chrome({
				model: this.account.user
			});
		}

	});

	return new Application();
});
