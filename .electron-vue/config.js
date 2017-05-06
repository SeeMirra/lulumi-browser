const ncp = require('ncp').ncp;
const path = require('path');

ncp.limit = 16;

const config = {
  // Name of electron app
  // Will be used in production builds
  name: 'lulumi-browser',

  // Use ESLint (extends `airbnb`)
  // Further changes can be made in `.eslintrc.js`
  eslint: true,

  // webpack-dev-server port
  port: 9080,

  // electron-packager options
  // Docs: https://simulatedgreg.gitbooks.io/electron-vue/content/docs/building_your_app.html
  building: {
    arch: 'x64',
    asar: true,
    dir: path.join(__dirname, '../'),
    icon: path.join(__dirname, '../build/icons/icon'),
    ignore: /\b(src|test|build|electron-vue|gitignore|README|yarn)\b/,
    out: path.join(__dirname, '../builds'),
    overwrite: true,
    platform: process.env.PLATFORM_TARGET || 'all',
  },
};

config.building.name = config.name;

module.exports = config;