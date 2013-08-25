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
		views: "src/views",

		fixtures: '../test/fixtures'
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

window.describeWith = function(name, deps, callback) {

    var dependencies = {};
    var promise = $.Deferred();

    require(deps, function() {

        var modules = arguments;

        _.each(deps, function(d, i) {
            dependencies[d] = modules[i]
        });

        promise.resolve(modules)

    });

    describe(name, function() {
        var scope = this;

        before(function(done) {
            promise.done(function() {
                done()
            });
        });

        callback.call(this, function(name) {
            return dependencies[name];
        });
        
    });
};
