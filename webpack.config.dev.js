var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/app'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      // js
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'client')
      },
      // CSS
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: path.join(__dirname, 'client'),
        exclude: /node_modules/

      },

      //Image Loader
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/i,
      //   loaders: [
      //     'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
      //     'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
      //   ]
      // }

      //url loader
      {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'url-loader?limit=8192'
            ]
        }
    ]
  }
};
