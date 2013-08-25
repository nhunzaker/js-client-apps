/**
 * @name Comments
 */

define(['marionette', './comment'], function(Marionette, CommentView) {

	return Marionette.CollectionView.extend({
		tagName: 'ul',
		className: 'articles-list comments-list',
		itemView: CommentView,
		collectionEvents: {
			'sort' : 'render'
		}
	});

});
