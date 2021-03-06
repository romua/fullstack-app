const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin/dist/clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './be/src/app.ts',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, './../dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: path.resolve(__dirname, './../dist-fe/hooks'), to: 'public' },
    ])
  ],
  target: 'node',
  node: {
    fs: 'empty',
    __dirname: false,
    __filename: false,
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
};
