/**
 * @name Model.Comment
 */

define(['backbone'], function(Backbone) {

	return Backbone.Model.extend({
		defaults: {
			user_id: null,
			body: 'Not Body Given'
		}
	});
});
