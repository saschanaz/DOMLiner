const fs = require("fs");

task("domliner.d.ts", () => {
  const path = "lib/domliner.d.ts";
  const dts = fs.readFileSync(path, "utf-8");
  fs.writeFileSync(path, dts + "export as namespace DOMLiner;\n");
});

task("domliner.js", () => {
  const path = "lib/domliner.js";
  const js = fs.readFileSync(path, "utf-8");
  const injected = js
    .replace("function (factory)", "function (global, factory)")
    .replace("})(function (require, exports) {", `    else {
        global.DOMLiner = global.DOMLiner || {};
        var exports = global.DOMLiner;
        factory(global.require, exports);
    }
})(this, function (require, exports) {`);
  fs.writeFileSync(path, injected);
});

task("domliner.js.map", () => {
  const path = "lib/domliner.js.map";
  const jsmap = fs.readFileSync(path, "utf-8");
  const marker = '"mappings":"';
  const index = jsmap.indexOf(marker) + marker.length;
  const injected = `${jsmap.slice(0, index)};;;;;${jsmap.slice(index)}`;
  fs.writeFileSync(path, injected);
});

/**
 * Promisify jake.exec
 * @param {string[]} cmds 
 */
function asyncExec(cmds) {
  return new Promise(resolve => {
    jake.exec(cmds, { printStdout: true, printStderr: true }, resolve);
  });
}

task("tsc", () => asyncExec(["tsc"]))

task("default", ["tsc", "domliner.d.ts", "domliner.js", "domliner.js.map"]);
