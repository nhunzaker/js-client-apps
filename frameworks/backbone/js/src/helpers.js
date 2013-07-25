/**
 * @name Application::Helpers
 */

define(['handlebars', 'moment'], function(Handlebars, moment) {

	Handlebars.registerHelper('with', function(context, options) {
	  return options.fn(context);
	});

	Handlebars.registerHelper('link', function(url, text) {
		text = Handlebars.compile(Handlebars.Utils.escapeExpression(text))(this);
		url  = Handlebars.compile(Handlebars.Utils.escapeExpression(url))(this);
		var result = '<a href="' + url + '">' + text + '</a>';
		return new Handlebars.SafeString(result);
	});

	Handlebars.registerHelper('moment', function(date) {
		return moment(date).fromNow();
	});

	Handlebars.registerHelper('host', function(url) {
		var a = document.createElement('a');
		a.href = url;
		return a.host;
	});

	Handlebars.registerHelper('pluralize', function(count, plural, singular, showCount) {
		return (showCount === false? '' : count + " ") + (count > 1? plural : singular);
	});
});
