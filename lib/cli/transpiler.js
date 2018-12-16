#!/usr/bin/env node

/**
 * /usr/local/bin/lost 에 들어가서 command line 에서 lost 를 호출할때 이 스크립트들이 실행된다.
 *
 * Usage: lost [options] <input_files...>
 *
 * Options:
 * -o, --output <output>  Write the build output to an output file.
 * -h, --help             output usage information
 *
 * e.g.)
 *
 * lost helloworld.cat -o helloworld.c
 *
 * OR
 *
 * lost -o helloworld.c helloworld.cat
 */

const commander = require('commander');

const chalk = require('chalk');


commander
    .usage('[options] <input_files...>')
    .arguments('<input_files...>')

    .option('-o, --output <output>', 'Write the build output to an output file.')
    /**
     * To get string arguments from options you will need to use angle brackets <> for required inputs or square brackets [] for optional inputs.
     */
    .action(function(input_files){
        process.stdout.write(chalk.red(commander.output) + chalk.green(input_files));
        console.log("\n\n");
        input_files.forEach((v) => {
            console.log(v);
        })
    })

    .parse(process.argv);
