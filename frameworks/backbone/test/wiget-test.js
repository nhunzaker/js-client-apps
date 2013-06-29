describeWith("Model.Widget", [
  'models/model.widget'
], function(require) {

  it ("has a default name", function() {
    var widget = new (require('models/model.widget'))();
	expect(widget.get('name')).to.equal('Widget');
  });

});
