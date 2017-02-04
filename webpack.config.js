const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV === 'production';

const entry = PRODUCTION
              ? ['./src/index.js']
              : [
                './src/index.js',
                'webpack/hot/dev-server',
                'webpack-dev-server/client?http://localhost:8080'
              ];

const plugins = PRODUCTION
              ? [
                  new webpack.DefinePlugin({
                    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
                  }),
                  new webpack.optimize.UglifyJsPlugin(),
                  new ExtractTextPlugin('styles-[contenthash:10].css'),
                  new HTMLWebpackPlugin({
                      template: 'index-template.html'
                  })
              ]
              : [new webpack.HotModuleReplacementPlugin()];

const cssIdentifier = PRODUCTION ? '[hash:base64:10]' : '[path][name]---[local]';

const cssLoader = PRODUCTION
              ? ExtractTextPlugin.extract({
                      loader: `css-loader?minimize&localIdentName=${cssIdentifier}`
                  })
              : ['style-loader', `css-loader?localIdentName=${cssIdentifier}`];

//Use production or developemnt variables in code as boolean
plugins.push(
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(DEVELOPMENT),
      PRODUCTION: JSON.stringify(PRODUCTION)
    })
);

module.exports = {
  devtool: 'source-map',
  entry,
  plugins,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: PRODUCTION ? '/' : '/dist/',
    filename: PRODUCTION ? 'bundle.[hash:12].min.js' : 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      loaders: cssLoader,
      exclude: /node_modules/
    }]
  }
};
