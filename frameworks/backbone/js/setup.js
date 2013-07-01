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
		models: "src/models",
		collections: "src/collections",
		routers: "src/routers",
		views: "src/views",

		// Modules
		nodes: "src/nodes",
		account: 'src/nodes/account',
		articles: 'src/nodes/articles',
		chrome: 'src/nodes/chrome',

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
	Backbone.history.start();
});
