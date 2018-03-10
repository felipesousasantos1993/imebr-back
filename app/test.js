var Mocha = require('mocha'),
    fs = require('fs'),
    path = require('path');

// Instantiate a Mocha instance.
var mocha = new Mocha();


describe('something', function(){
  it('should work', function(done){
   var date1 = new Date(2015, 11, 1); // 2015-12-1
    var date2 = new Date(2014, 0, 1); // 2014-01-1
    var diff = new DateDiff(date1, date2);

    assert.equal(diff.months(), 1.9);

    done();
  })
})