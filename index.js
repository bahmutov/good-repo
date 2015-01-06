#!/usr/bin/env node

require('lazy-ass');
var goodRepo = require('./src/good-repo');

if (module.parent) {
  module.exports = goodRepo;
} else {
  require('./src/check-updates');

  var join = require('path').join;
  var pkg = require(join(__dirname, 'package.json'));
  console.log(pkg.name + '@' + pkg.version, '-', pkg.description);

  var options = require('./src/cli');
  goodRepo(options);
}
