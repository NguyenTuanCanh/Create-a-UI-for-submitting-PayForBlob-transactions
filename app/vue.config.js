var path = require("path");
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: "http://localhost:39001",
  },
  configureWebpack: {
    resolve: {
      alias: {
        src: path.resolve(__dirname, "src"),
      },
    },
  },
});
