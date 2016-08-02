'use strict';

const program = require('commander');
const version = require('../package.json').version;
const core = require('./core');

function execute(cmd, a, b) {
    console.log(`execute command: ${cmd} for ${a} and ${b}`);
    console.log(`result: ${core[cmd](+a, +b)}`);
}

program
    .version(version)
    .arguments('<cmd> <a> <b>')
    .action(execute)
    .parse(process.argv);

