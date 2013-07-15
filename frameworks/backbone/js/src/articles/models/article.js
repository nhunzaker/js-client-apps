/**
 * @name Model.Article
 */

define(['backbone'], function(Backbone) {

	return Backbone.Model.extend({
		urlRoot: '/articles',

		voteUrl: function() {
			return this.url() + "/votes";
		},

		defaults: {
			title: 'Not Title Given',
			url: 'No URL Given'
		},

		upvote: function() {
			var request = Backbone.sync('create', this, {
				attrs: {},
				url: this.voteUrl()
			});

			request.done(function() {
				this.fetch();
			}.bind(this));

			request.fail(function(xhr, type, message) {
				if (xhr.status === 422) {
					alert("You have already upvoted for this article!");
				}
			});
		}
	});
});
