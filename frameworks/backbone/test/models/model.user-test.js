describe("Model.User",function() {
	var User;

	before(function(done) {
		require(['models/model.user'], function(module) {
			User = module;
			done();
		});
	});

	it ("has a default name", function() {
		var user = new User();
		expect(user.get('username')).to.equal('haxxor_news');
	});

});
