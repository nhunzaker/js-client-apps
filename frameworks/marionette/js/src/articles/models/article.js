/**
 * @name Article
 * @extends Votable
 */

define(['articles/models/votable'], function(Votable) {

	return Votable.extend({
		urlRoot: '/articles',
		defaults: {
			title: 'Not Title Given',
			url: 'No URL Given'
		},
		initialize: function() {
			this.fetch();
		}
	});

});
