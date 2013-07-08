/**
 * @name Articles.Views.Create
 */

define([
	'chrome/views/form',
	'articles/models/article',
	'hbs!articles/templates/create.hbs'
], function(Form, Article, template) {

	return Form.extend({
		template: template
	});

});

