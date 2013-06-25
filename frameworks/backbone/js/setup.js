/**
 * @name RequireJS Setup
 * @desc Responsible for setting up requirejs, 
 *      then loading the main app
 */

requirejs.config({

	baseUrl: "/js",

	paths: {
		backbone: "vendor/backbone",
		jquery: "vendor/jquery",
		underscore: "vendor/underscore",

		application: "src/application",
		models: "src/models",
		collections: "src/collections",
		routers: "src/routers",
		views: "src/views"

	},

	shim: {
		jquery: {
			exports: "$"
		},

		underscore: {
			exports: "_"
		},

		backbone: {
			deps: ['jquery', 'underscore'],
			exports: "Backbone"
		}
	}
});

require(['application'], function(App){
	console.log(App);
});