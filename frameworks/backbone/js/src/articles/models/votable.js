/**
 * @name Votable
 * @desc A common ancestor for models with voting behavior
 */

define(['backbone'], function(Backbone) {
	return Backbone.Model.extend({
		voteUrl: function() {
			return this.url() + "/votes";
		},

		upvote: function() {
			return Backbone.sync('create', this, {
				attrs: {},
				url: this.voteUrl(),
				success: this.fetch.bind(this),
				error: function(xhr) {
					if (xhr.status === 422) alert("You have already upvoted this!");
				}
			});
		}
	});
});
