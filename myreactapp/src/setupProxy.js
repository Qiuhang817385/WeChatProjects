const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use('/api', createProxyMiddleware({ target: 'http://www.qiuhang.club:7300/mock/5e5a17e700fbdf09dcf21f8e/mart', changeOrigin: true }));
};