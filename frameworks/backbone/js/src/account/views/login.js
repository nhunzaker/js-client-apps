/**
 * @name View.Login
 * @desc A login model that floats from above the page.
 */

define([
	'chrome/views/form', 
	'hbs!account/templates/login.hbs'
], function(Form, template) {
	return Form.extend({
		action: 'authenticate',
		template: template,
		modelEvents: {
			'invalid' : 'reportError',
			'request:authentication' : 'clearErrors',
			'sync:authentication' : 'remove'
		}
	});

});
