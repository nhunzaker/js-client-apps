/**
 * @name Comments
 */

define(['marionette', './comment'], function(Marionette, CommentView) {

	return Marionette.CollectionView.extend({
		itemView: CommentView
	});

});
