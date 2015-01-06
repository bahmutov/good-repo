var program = require('commander');
program
  .option('-r, --repo <username/repo>',
    'Checks if current code from given repo breaks dependent projects')
  .parse(process.argv);

module.exports = program;
