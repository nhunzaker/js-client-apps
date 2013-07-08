/**
 * @name Articles/Views/Index
 */

define([
	'marionette',
	'../collections/articles',
	'hbs!articles/templates/index.hbs'
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
