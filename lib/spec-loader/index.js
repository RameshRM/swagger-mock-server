'use strict';

var resourceServer = require('swagger-resource-meddleware');
var js2yaml = require('../modUtils/js-to-yaml');
var async = require('async');

module.exports.load = function load(options, callback) {
  options = options || {};

  async.waterfall([js2yaml.doc.bind(this, options.yaml), function(result, callback) {

    var specDoc = result && !(result instanceof Error) ? result : undefined;
    var specErr = result && result instanceof Error;
    if (options.app && specDoc) {
      return resourceServer.mount({
        name: options.name || 'Spec Resource',
        doc: specDoc
      }, options.app, callback);
    }

    return callback(specErr, specDoc);
  }], callback);

};
