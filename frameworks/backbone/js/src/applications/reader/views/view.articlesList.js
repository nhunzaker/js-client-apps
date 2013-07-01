/**
 * @name View.ArticlesList
 */

define(['backbone', 'tpl!reader/templates/articlesList.tpl'], function(Backbone, template) {

	return Backbone.View.extend({

		template: template,

		initialize: function() {
			this.listenTo(this.collection, 'add remove', this.render);
			this.collection.fetch();
		},

		render: function() {

			var markup = this.template({
				articles: this.collection.toJSON()
			});

			this.$el.html(markup);
		}

	});

});
