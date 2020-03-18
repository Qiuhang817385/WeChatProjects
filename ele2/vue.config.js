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
      proxy: {
        '/': {
          target: ' http://www.qiuhang.club:7300/mock/5e3f72c000fbdf09dcf21f79/sell',
          changeOrigin: true
        }

      }
    }
  },

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: false,
      theme: false
    }
  }
}
