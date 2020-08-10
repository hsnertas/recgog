
const fs = require('fs');
const path = require('path');
const models = {};

fs.readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) &&
      (file !== path.basename(__filename)) &&
      (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const key = path.basename(file, '.js');
    models[key] = require(path.join(__dirname, file));
  });


module.exports = models;