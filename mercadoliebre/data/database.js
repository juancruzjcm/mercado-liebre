const fs = require('fs'); /* administrar archvos */
const path = require('path'); /* administrar rutas */

module.exports = JSON.parse(fs.readFileSync(path.join(__dirname, './productsDataBase.json'), 'UTF-8'));