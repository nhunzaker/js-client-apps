/**
 * @name App.Composer
 * @desc Displays articles
 */

define([
	'apps/app.base', 
	'models/model.article'
], function(App, Articles) {

	return App.extend({

		routes: {
			'': 'index'
		},

		initialize: function() {
			this.collection = new Articles();
		},

		index: function() {

			var col = this.collection;

			require(['reader/views/view.articlesList'], function(View) {

				var view = new View({
					el: "#body",
					collection: col
				});

			});

		}

	});

});
