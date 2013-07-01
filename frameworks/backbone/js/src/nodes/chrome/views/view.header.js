/**
 * @name View.Header
 * @desc The account header. Shows up on all pages.
 */

define([
	'backbone', 
	'tpl!chrome/templates/header.tpl'
], function(Backbone, template) {

	return Backbone.View.extend({

		template: template,

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
			this.render();
		},

		render: function() {
			var data = _.extend({ token: false }, this.model.toJSON());
			var markup = this.template(data);

			this.$el.html(markup);
			return this;
		}

	});

});
