const fs = require('fs');
const { exec } = require('child_process');
const solutions = require('./solutions');

const shell = (cmd, verify) => {
  return new Promise((resolve, reject) => {
      exec(cmd, (error, stdout, stderr) => resolve({
          success: verify(stdout.replace(/\r/g, '')),
          stdout: stdout.replace(/\r/g, ''),
          error, stderr,
      }));
  });
};

const main = async () => {
    let success = await shell(
        'javacc ./src.jj',
        stdout => stdout.indexOf('Parser generated successfully.') > -1
    );

    if (!success) {
        return;
    }

    console.log('Parser compiled...');

    (success = await shell('javac *.java', stdout => stdout === ''));

    if (!success) {
        return;
    }

    console.log('Java files compiled...');

    if (process.argv.length === 4) {
        fs.readdirSync('./tests').map(runTest);
    } else {
        fs.readdirSync('./tests').sort().reduce((p, file) => p.then(async () => await runTest(file)), Promise.resolve());
    }
};

const runTest = async (file) => {
    const { success, error, stdout, stderr } = await shell(
      `java ${process.argv[2]} <tests/${file}`,
        stdout => stdout.split('\n').filter(e => e).join('') === solutions[file].join('')
    );

    console.log(`${file}: ${success ? 'SUCCESS' : 'FAILURE'} > expected: ${solutions[file]}, got: ${stdout.split('\n').filter(e  => e)}`)

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
