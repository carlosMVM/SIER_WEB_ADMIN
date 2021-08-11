const fsExtra = require('fs-extra');

const pathToManifest = `${__dirname}/build/asset-manifest.json`;

const manifestInfo = fsExtra.readJsonSync(pathToManifest);

module.exports.manifestInfo = manifestInfo.files;
