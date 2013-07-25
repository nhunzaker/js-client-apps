/**
 * @name RequireJS Setup
 * @desc Responsible for setting up requirejs,
 *      then loading the main app
 */

requirejs.config({

	baseUrl: "/js",

	urlArgs: "bust=" + (+new Date()),

	paths: {
		// Vendor
		backbone: "vendor/backbone",
		handlebars: "vendor/handlebars",
		jquery: "vendor/jquery",
		marionette: "vendor/marionette",
		underscore: "vendor/underscore",
		moment: "vendor/moment",

		// Plugins
		text: "vendor/text",
		hbs: "vendor/hbs",

		// App
		application : "src/application",
		articles : "src/articles",
		account : "src/account",
		chrome : "src/chrome"
	},

	shim: {
		jquery: {
			exports: "$"
		},
		moment: {
			exports: "moment"
		},
		underscore: {
			exports: "_"
		},
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: "Backbone"
		},
		marionette : {
			deps : ['backbone'],
			exports : 'Marionette'
		}
	}
});

require([
	'application',
	'account/account',
	'chrome/chrome',
	'articles/articles'
], function(App){
	App.start();
});
