const { exec } = require("child_process");

async function runCommand(cmd) {
  console.log('\x1b[32m%s\x1b[0m', "+ " + cmd)
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
        if (error) {
            reject(error.message)
        }
        if (stderr) {
          reject(stderr)
        }
        resolve(stdout)
    });
  })
}



async function main() {
  await runCommand("./mdbook build wiki").catch(console.log);
  await runCommand("git add .");
  await runCommand("git commit -m 'wiki: update wiki'");
  await runCommand("git push origin main");
}

main().catch(console.log)
