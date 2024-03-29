const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json')

const devConfig = {
  entry: './src/index',
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name:'auth',
      filename:'remoteEntry.js',
      exposes:{
        './authForm':'./src/bootstrap'
      },
      shared: packageJson.dependencies
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);