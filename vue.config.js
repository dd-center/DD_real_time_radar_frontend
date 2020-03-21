// 在vue-config.js 中加入
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
 // 配置webpack
 configureWebpack: config => {
  if (isProduction) {
   // 开启gzip压缩
   config.plugins.push(new CompressionWebpackPlugin({
    algorithm: 'gzip',
    test: /\.js$|\.html$|\.json$|\.css/,
    threshold: 10240,
    minRatio: 0.8
   }))
  }
 }
};