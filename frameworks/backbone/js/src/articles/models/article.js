/**
 * @name Model.Article
 */

define(['backbone'], function(Backbone) {

	return Backbone.Model.extend({

		defaults: {
			user_id: null,
			title: 'Not Title Given',
			url: 'No URL Given'
		}

	});

});
