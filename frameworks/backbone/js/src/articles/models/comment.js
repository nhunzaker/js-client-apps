/**
 * @name Comment
 * @extends Votable
 */

define(['articles/models/votable'], function(Votable) {

	return Votable.extend({
		urlRoot: '/comments',
		defaults: {
			user_id: null,
			body: 'Not Body Given'
		}
	});

});
