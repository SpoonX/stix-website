const fs      = require('fs');
const sidebar = require('./sidebars');

const classesPath    = 'api/classes/';
const enumPath       = 'api/enums/';
const interfacesPath = 'api/interfaces/';

let classes    = fs.readdirSync(`../docs/${classesPath}`).map(file => classesPath + file.slice(0, -3));
let enums      = fs.readdirSync(`../docs/${enumPath}`).map(file => enumPath + file.slice(0, -3));
let interfaces = fs.readdirSync(`../docs/${interfacesPath}`).map(file => interfacesPath + file.slice(0, -3));

sidebar.API.Classes    = classes;
sidebar.API.Enums      = enums;
sidebar.API.Interfaces = interfaces;

fs.writeFileSync('./sidebars.json', JSON.stringify(sidebar, null, 2));
