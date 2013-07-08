/**
 * @name View.ArticlesList
 */

define([
	'marionette',
	'../collections/articles',
	'hbs!articles/templates/articlesList.hbs'
], function(Marionette, Articles, template) {

	return Marionette.ItemView.extend({
		template: template,
		initialize: function() {
			this.collection = this.collection || new Articles();
			this.listenTo(this.collection, 'add remove', this.render);
			this.collection.fetch();
		}
	});

});
