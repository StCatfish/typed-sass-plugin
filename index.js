const childprocess = require("child_process");
const path = require("path");

/**
 * @constructor
 * @param {object} [options={}]
 * @param {boolean} [options.camelCase]
 * @param {string} [options.test]
 */
module.exports = function TypedSassPlugin(options) {
  options = options || {};

  this.apply = function (compiler) {
    compiler.hooks.beforeRun.tapAsync("typed-sass-plugin", (compiler, callback) => {
  
      const context = compiler.options.context
      
      childprocess.exec(
        `node \
        node_modules/awesome-typed-sass-modules/lib/cli.js \
        ${context} \
        ${!!options.camelCase ? "-c": ""} \
        -p ${!!options.test ? options.test: "**/*.scss"}`,
        (error) => {
          callback(error);
        }
      );
    });
  }
};
