const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const GlobEntriesPlugin = require("webpack-watched-glob-entries-plugin");

const src = path.join(__dirname, "app");

/**
 * Support TypeScript for webextension-toolbox
 * @param {import("webpack").Configuration} config
 * @param {string} target
 * @param {string} vendor
 */
function injectSupportTypeScript(config, target, vendor) {
  // eslint-disable-next-line no-param-reassign
  config.entry = GlobEntriesPlugin.getEntries([
    path.resolve(path.join(__dirname, "app", "*.{js,ts,mjs,jsx,tsx}")),
    path.resolve(path.join(__dirname, "app", "?(scripts)/*.{js,ts,mjs,jsx,tsx}"))
  ]);

  config.module.rules.push({
    test: /\.tsx?$/,
    use: "ts-loader"
  });

  config.resolve.extensions.push(".ts", ".tsx");

  let globalIdx = 0;
  const copyPluginIdx = config.plugins.findIndex(w => {
    if (JSON.stringify(w) !== "{}") return false;
    globalIdx += 1;
    return globalIdx === 2; // XXX: Hard-Coded
  });
  if (copyPluginIdx) config.plugins.splice(copyPluginIdx, 1);
  config.plugins.push(
    new CopyPlugin([
      {
        context: path.resolve(src),
        from: path.resolve(src, "**/*"),
        ignore: ["**/*.js", "**/*.ts", "**/*.json"],
        to: path.resolve(target.replace("[vendor]", vendor))
      },
      {
        context: path.resolve(src),
        from: path.resolve(src, "_locales/**/*.json"),
        to: path.resolve(target.replace("[vendor]", vendor))
      }
    ])
  );

  return config;
}

/**
 * Remove webextension-polyfill from global because avoid duplicate imports
 * @param {import("webpack").Configuration} config
 */
function removeWebExtensionPolyfill(config) {
  const ruleIdx = config.module.rules.findIndex(w => w.test.toString().includes("webextension-polyfill"));
  if (ruleIdx) config.module.rules.splice(ruleIdx, 1);

  const pluginIdx = config.plugins.findIndex(w => w.definitions && w.definitions.browser);
  if (pluginIdx) config.plugins.splice(pluginIdx, 1);

  return config;
}

module.exports = {
  /**
   * @param {import("webpack").Configuration} origin
   */
  webpack: (origin, { target, vendor }) => {
    let config = origin;
    config = injectSupportTypeScript(config, target, vendor);
    config = removeWebExtensionPolyfill(config);
    return config;
  }
};
