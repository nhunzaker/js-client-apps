/**
 * @name Node.Chrome
 * @desc Handles general chrome for the application
 */

define([
	'nodes/node.base', 
	'chrome/views/view.header'
], function(Node, Header) {

	return Node.extend({

		routes: {},

		initialize: function(options) {

			this.model = options.model;

			this.header = new Header({
				el: "#header",
				model: this.model
			});

		}


	});

});
