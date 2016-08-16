'use strict';

var debug = require('debug')('swagger-mock-server');
var app = require('express')();
var APP_PORT = process.env.APP_PORT || 0;
var async = require('async');

var Spec = require('./lib/spec-loader');
var specFile = process.env.SPEC_FILE || process.argv && process.argv[2];

async.waterfall([Spec.load.bind(this, {
  yaml: specFile,
  app: app
}), function(result, callback) {
  callback(result instanceof Error || undefined, result instanceof Error ? undefined : result);
}], function(err) {
  if (err) {
    debug('Unable to load spec, %s', err);
  }
  var listener = app.listen(APP_PORT);
  debug('Server running on port %s', listener && listener.address && listener.address().port);
});

app.get('/foo', function foo(req, res) {
  res.send('foo');
});

module.exports.app = app;
