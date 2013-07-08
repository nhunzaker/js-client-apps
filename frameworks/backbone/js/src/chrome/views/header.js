/**
 * @name View.Header
 * @desc The account header. Shows up on all pages.
 */

define([
	'marionette',
	'hbs!chrome/templates/header.hbs'
], function(Marionette, template) {

	return Marionette.ItemView.extend({
		template: template,
		modelEvents: {
			'change' : 'render'
		}
	});

});
