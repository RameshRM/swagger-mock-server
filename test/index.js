'use strict';

var assert = require('assert');
var yamlLoader = require('../lib/modUtils/js-to-yaml');
var path = require('path');

describe('should be able to load yaml document', function() {
  it('function load yaml', function(done) {
    yamlLoader.doc(path.join(__dirname, '/fixtures/petstore.yaml'), function(err, result) {
      assert.ok(!err && result);
      assert.ok(result.info && result.info.title === 'Swagger Petstore');
      done();
    });
  });

  it('Should fail with file not found unable to load yaml', function(done) {
    yamlLoader.doc(path.join(__dirname, '/fixtures/petstore2.yaml'), function(err, result) {
      assert.ok(err && !result);
      assert.ok(err.code === 'ENOENT');
      done();
    });
  });

});
