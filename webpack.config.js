const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    host: '0.0.0.0',
    useLocalIp: true,
    contentBase: path.join(__dirname, 'src/public'),
    historyApiFallback: true,
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react'),
    },
    fallback: {
      "fs": false
    },
  },
  module: {

    rules:
      [

        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  module: true
                }
              }
            }
          ],
        },
        {
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        },
        {
          test: /\.(woff|woff2|ttf|otf)$/,
          loader: 'file-loader',
          include: [/fonts/],

          options: {
            name: '[hash].[ext]',
            outputPath: 'css/',
            publicPath: url => '../css/' + url
          }
        },
      ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/public/index.html',
    }),
  ],
};