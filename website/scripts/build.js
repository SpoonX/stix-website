const { Git, Package, BaseCommandManager, File } = require('tape-roller');
const path                                       = require('path');

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
