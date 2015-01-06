require('lazy-ass');
var check = require('check-more-types');
var gitAndNpm = require('git-and-npm');
var quote = require('quote');

function goodRepo(options) {
  la(check.object(options), 'missing options');
  la(check.unemptyString(options.repo), 'missing repo name', options);

  return gitAndNpm.cloneAndInstall(options.repo)
    .then(function (folder) {
      console.log('cloned', quote(options.repo), 'to', quote(folder));
      return folder;
    });
}

module.exports = goodRepo;
