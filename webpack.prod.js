const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const WorkboxPlugin = require('workbox-webpack-plugin');
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    // 持久化
    new WorkboxPlugin.GenerateSW({
      //  ServiceWorkers 快速启用
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true
    })
  ]
});
