const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: path.resolve(__dirname, '..', 'src'),
  output: {
    publicPath: '/',
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, '..', 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '#assets': path.resolve(__dirname, '../src/assets/'),
      '#components': path.resolve(__dirname, '../src/components/'),
      '#constants': path.resolve(__dirname, '../src/constants/'),
      '#helpers': path.resolve(__dirname, '../src/helpers/'),
      '#pages': path.resolve(__dirname, '../src/pages/'),
      '#store': path.resolve(__dirname, '../src/store/'),
      '#utils': path.resolve(__dirname, '../src/utils/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.png/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'template/index.html'),
    }),
    new FriendlyErrorsWebpackPlugin(),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: true,
  },
};

module.exports = config;
