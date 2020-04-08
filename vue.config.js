// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
// import path from 'path'
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@c": path.resolve(__dirname, "src/components")
      }
    }
  }
}