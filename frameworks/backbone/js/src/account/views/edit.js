/**
 * @name View.Register
 * @desc A register modal that floats from above the page.
 */

define([
	'chrome/views/form',
	'hbs!account/templates/edit.hbs'
], function(Form, template) {
	return Form.extend({
		template: template,
		modelEvents: {
			'request' : 'clearErrors'
		},
		patch: true
	});
});
