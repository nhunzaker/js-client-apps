/**
 * @name View.Header
 * @desc The account header. Shows up on all pages.
 */

define([
	'backbone', 
	'tpl!apps/account/templates/header.tpl'
], function(Backbone, template) {

	return Backbone.View.extend({

		template: template,

		initialize: function() {
			this.listenTo(this.model, 'change', this.render);
		},

		render: function() {
			var markup = this.template(this.model.toJSON());
			this.$el.html(markup);
			return this;
		}

	});

});
