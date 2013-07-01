/**
 * @name Model.Article
 */

define(['backbone'], function(Backbone) {

	return Backbone.Model.extend({

		defaults: function(attrs) {
console.log(attrs);
			return {
				user_id: null,
				title: 'Not Title Given',
				url: 'No URL Given'
			};
		}

	});

});
