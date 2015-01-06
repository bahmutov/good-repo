require('lazy-ass');
var check = require('check-more-types');
var gitAndNpm = require('git-and-npm');
var quote = require('quote');
var dontBreak = require('dont-break');

function goodRepo(options) {
  la(check.object(options), 'missing options');
  la(check.unemptyString(options.repo), 'missing repo name', options);

  return gitAndNpm.cloneAndInstall(options.repo)
    .then(function (folder) {
      console.log('cloned', quote(options.repo), 'to', quote(folder));
      return folder;
    })
    .then(dontBreak)
    .then(function (result) {
      console.log('dont-break returned', result);
    });
}

module.exports = goodRepo;
