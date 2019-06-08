const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, './client/public/static/index.html'),
      minify: {
        collapseWhitespace: true
      }
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './client/public/static'),
        to: path.resolve(__dirname, './dist/static'),
        ignore: ['index.html']
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
