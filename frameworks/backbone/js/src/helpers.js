/**
 * @name Application::Helpers
 */

define(['handlebars'], function(Handlebars) {

	Handlebars.registerHelper('with', function(context, options) {
	  return options.fn(context);
	});

});
