'use strict';

var app;
var supertest = require('supertest');
var path = require('path');
var assert = require('assert');

describe('Mock Server should work', function() {
  before(function(done) {
    setTimeout(function() {
      process.env.SPEC_FILE = path.join(__dirname, '/fixtures/petstore.yaml');
      app = require('../').app;
      done();
    }, 300);
  });

  after(function(done) {
    delete process.env.SPEC_FILE;
    done();
  });

  it('Should load server', function(done) {
    supertest(app).get('/_resources').end(function(err, result) {
      assert.ok(!err && result);
      assert.ok(result.body);
      assert.ok(result.body.basePath === '/v1');
      done();

    });
  });

  it('Should load server /v1', function(done) {
    supertest(app).get('/v1').end(function(err, result) {
      assert.ok(!err && result);
      assert.ok(result.body);
      assert.ok(result.body.basePath === '/v1');
      done();
    });
  });

  it('Should load server /v1/pets', function(done) {
    supertest(app).get('/v1/pets').end(function(err, result) {
      assert.ok(!err && result);
      assert.ok(result.text);
      done();
    });
  });

});
