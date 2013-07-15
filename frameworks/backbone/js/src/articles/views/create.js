/**
 * @name Articles.Views.Create
 */

define([
	'chrome/views/form',
	'hbs!articles/templates/create.hbs'
], function(Form, template) {

	return Form.extend({
		template: template,

		modelEvents: {
			'change': 'visitArticle'
		},

		visitArticle: function() {
			require('application').execute('articles:visit', this.model.id);
		}
	});

});

