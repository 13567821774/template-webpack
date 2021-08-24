const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
// const webpack = require('webpack');
module.exports = {
  entry: './src/main.ts',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/'
  },
  resolve: {
    // 后缀省略
    extensions: ['.tsx', '.ts', '.js'],
    // 创建别名
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['@babel/plugin-transform-runtime'], //babel单独一个模块，避免helpers 重复
              cacheDirectory: true, // 缓存babel到文件系统
              cacheCompression: true // 缓存压缩默认是true 开启Gzip
            }
          }
        ]
      },
      {
        // ts和tsx解析
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        // 处理css
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        // 处理图片文件
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      {
        // 处理字体文件
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  // 优化选项
  optimization: {
    runtimeChunk: 'single',
    // hash 依赖捆包
    moduleIds: 'deterministic',
    splitChunks: {
      // 提取到vendor
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'hello webpack',
      template: './public/index.html',
      name: 'index.html',
      hash: true, // 缓存破坏
      inject: 'body' // 插入body
    }),
    // 持久化
    new WorkboxPlugin.GenerateSW({
      //  ServiceWorkers 快速启用
      // 不允许遗留任何“旧的” ServiceWorkers
      clientsClaim: true,
      skipWaiting: true
    })
  ]
};
