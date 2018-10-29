const { Git, Package, BaseCommandManager, File } = require('tape-roller');
const path                                       = require('path');
const { spawn }                                  = require('child_process');

(async () => {
  try {
    const cwd = process.cwd();

    console.log('Cloning stix...');
    await Git.clone('https://github.com/SpoonX/stix.git', 'stix', path.resolve(cwd, '..'));

    console.log('Installing packages...');
    await Package.install(path.resolve(cwd, '..', 'stix'));

    console.log('Building API docs...');
    await BaseCommandManager.runCommand('yarn', ['build-api'], { cwd });

    console.log('Copying Changelog...');
    await File
      .read(path.resolve(cwd, '..', 'stix', 'doc', 'CHANGELOG.md'))
      .modify(/^./g, { prepend: '---\ntitle: Changelog\nid: changelog\n---\n\n' })
      .write(path.resolve(cwd, '..', 'docs', 'CHANGELOG.md'));

    console.log('Creating sidebar...');
    await BaseCommandManager.runCommand('yarn', ['create-sidebar'], { cwd });

    console.log('Cleaning up...');
    await File.remove(path.resolve(process.cwd(), '..', 'stix'), true);
    await File.remove(path.resolve(process.cwd(), '..', 'docs', 'api', 'modules'), true);

    console.log('Done!');
  } catch (error) {
    console.log(error);
  }
})();

async function cloneStix () {

}

async function generateVersionedDocs () {
  const task = spawn('git', ['tag', '-l'], { cwd: path.resolve(process.cwd(), 'stix') });

  return new Promise((resolve, reject) => {
    task.on('error', reject);

    task.on('close', (status) => {
      if (status !== 0) {
        return reject(new Error(`Generate docs failed (${status}).\nGot error: ${task.stderr}`));
      }
    });

    task.on('data', async data => {
      const versions = data.toString().split('\n');
      const stixPath = path.resolve(process.cwd(), 'stix');
      versions.pop(); // last item is empty

      for (let i = 0; i < versions.length; i++) {
        await BaseCommandManager.runCommand('git', ['checkout', versions[i]], { cwd: stixPath });
        await BaseCommandManager.runCommand('yarn', ['build-api'], { cwd: process.cwd() });
        await BaseCommandManager.runCommand('yarn', ['version', versions[i]], { cwd: process.cwd() });
      }
    });
  });
}
