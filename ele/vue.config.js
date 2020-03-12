const webpack = require('webpack');
// 配置路径
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  //部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('@/assets', resolve('./src/assets'));
    // 配置sass
  },
  configureWebpack: {
    devServer: {
      port: 8888,
      open: true,
      overlay: {
        warning: false,
        errors: false
      },
    }
  }
}