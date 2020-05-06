const fs = require('fs');
const { exec } = require('child_process');
const chalk = require('chalk');
const solutions = require('./solutions');

const shell = (cmd, verifyOut, verifyErr) => {
  return new Promise((resolve, reject) => {
      exec(cmd, (error, stdout, stderr) => resolve({
          success: verifyOut(stdout.replace(/\r/g, '')) && verifyErr(stderr.replace(/\r/g, '')),
          stdout: stdout.replace(/\r/g, ''),
          stderr: stderr.replace(/\r/g, ''),
          error,
      }));
  });
};

const main = async () => {
    let success = await shell(
        'javacc ./src.jj',
        stdout => stdout.indexOf('Parser generated successfully.') > -1,
        () => true,
    );

    if (!success) {
        return;
    }

    console.log('Parser compiled...');

    (success = await shell('javac *.java', stdout => stdout === '', () => true));

    if (!success) {
        return;
    }

    console.log('Java files compiled...');
    console.log(chalk.black.bgYellow(`${'File'.padEnd(10, ' ')} Status      ${'Expected'.padEnd(30, ' ')} ${'Got'.padEnd(30, ' ')}`));
    console.log(chalk.black.bgYellow(''.padEnd(10 + 13 + 30 + 1 + 30, '-')));

    if (process.argv.length === 4) {
        fs.readdirSync('./tests').map(runTest);
    } else {
        fs.readdirSync('./tests').sort().reduce((p, file) => p.then(async () => await runTest(file)), Promise.resolve());
    }
};

const runTest = async (file) => {
    const { success, error, stdout, stderr } = await shell(
      `java ${process.argv[2]} <tests/${file}`,
        stdouta => stdouta.split('\n').filter(e => e).join('') === solutions[file][0].join(''),
        stderra => stderra.split('\n').filter(e => e)[0] === solutions[file][1],
    );

    const expected = [].concat.apply([], solutions[file]);
    const got = [
      ...stdout.split('\n').filter(e => e),
      ...stderr.split('\n').filter((e, index) => e && index === 0),
    ];

    console.log(`${chalk.cyan(`${file} > `.padEnd(10, ' '))} ${success ? chalk.green('SUCCESS') : chalk.red('FAILURE')}     ${ success ? chalk.black.bgGreen(`${expected.join(', ').padEnd(30, ' ')} ${got.join(', ').padEnd(30, ' ')}`) : chalk.black.bgRed(`${expected.join(', ').padEnd(30, ' ')} ${got.join(', ').padEnd(30, ' ')}`) }`)

    if (process.argv.length === 3 && !success) {
        if (error) console.log(error);
        if (stdout) console.log(stdout);
        if (stderr) console.log(stderr);
    }
};

if ([3, 4].indexOf(process.argv.length) > -1) {
    main();
} else {
    console.log(`Usage: node test [parser name] [fast?]`);
}
