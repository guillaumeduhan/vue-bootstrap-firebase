const ExtractTextPlugin = require("mini-css-extract-plugin")
const path = require("path")

module.exports = {
  devServer: {
    port: "9000"
  },
  runtimeCompiler: true,
  lintOnSave: true,
  chainWebpack: (config) => {
    config.optimization.delete("splitChunks");
    config.output.filename("[name].js");

    config.plugin("extract-css").use(ExtractTextPlugin, [
      {
        filename: "[name].css",
        allChunks: true,
      },
    ]);
  },
  configureWebpack: {
    output: {
      filename: "[name].js"
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
}