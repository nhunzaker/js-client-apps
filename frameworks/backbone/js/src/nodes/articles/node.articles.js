/**
 * @name App.Reader
 * @desc Displays articles
 */

define([
	'nodes/node.base', 
	'collections/collection.articles',
	'articles/views/view.articlesList'
], function(Node, Articles) {

	var Index = require('articles/views/view.articlesList');

	return Node.extend({

		routes: {
			'': 'index'
		},

		initialize: function() {
			this.collection = new Articles();
		},

		index: function() {
			return new Index({
				el: "#body",
				collection: this.collection
			});
		}

	});

});
