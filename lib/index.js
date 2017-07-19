const { glodule } = require("../node_modules/glodule/lib/index.js");
module.exports = glodule(fixedDirname() + "/domliner.js");

/** SystemJS issue #1711 */
function fixedDirname() {
    if (__dirname.match(/^\/[A-Z]:\//)) {
        return `file:/${__dirname}`
    }
    return __dirname;
}