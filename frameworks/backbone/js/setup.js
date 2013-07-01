/**
 * @name RequireJS Setup
 * @desc Responsible for setting up requirejs, 
 *      then loading the main app
 */

requirejs.config({

	baseUrl: "/js",
	urlArgs: "bust=" +  (new Date()).getTime(),
	paths: {

		// Backbone
		backbone: "vendor/backbone",
		jquery: "vendor/jquery",
		underscore: "vendor/underscore",

		// App
		application: "src/application",
		apps: "src/applications",
		models: "src/models",
		collections: "src/collections",
		routers: "src/routers",
		views: "src/views",

		// Modules
		account: 'src/applications/account',
		reader: 'src/applications/reader',

		// Plugins
		"tpl": "plugins/require.tpl"
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
