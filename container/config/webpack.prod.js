const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json')

const domain = process.env.PRODUCTION_DOMAIN

const devConfig = {
  entry: './src/index',
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name:'container',
      remotes:{
        marketing:`marketing@${domain}/marketing/remoteEntry.js`,
        auth:`auth@${domain}/auth/remoteEntry.js`,
        dashboard:`dashboard@${domain}/dashboard/remoteEntry.js`
      },
      shared:packageJson.dependencies
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
