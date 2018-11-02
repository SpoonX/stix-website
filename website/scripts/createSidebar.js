const { File } = require('tape-roller');
const fs      = require('fs');
const path = require('path');

(async () => {
  const classesPath    = 'api/classes/';
  const enumPath       = 'api/enums/';
  const interfacesPath = 'api/interfaces/';

  const classes    = fs.readdirSync(`../docs/${classesPath}`).map(file => classesPath + file.slice(0, -3));
  const enums      = fs.readdirSync(`../docs/${enumPath}`).map(file => enumPath + file.slice(0, -3));
  const interfaces = fs.readdirSync(`../docs/${interfacesPath}`).map(file => interfacesPath + file.slice(0, -3));

  const params = {
    classes: JSON.stringify(classes, null, 2),
    enums: JSON.stringify(enums, null, 2),
    interfaces: JSON.stringify(interfaces, null, 2)
  };

  await File
    .read(path.resolve(process.cwd(), 'sidebars_template.hs'))
    .replace(params)
    .write(path.resolve(process.cwd(), 'sidebars.json'));
})();
