var path = require('path');

module.exports = {
  entry: './rxjs/index,js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          plugins: [
            "babel-plugin-transform-decorators-legacy",
          ]
        }
      } 
    ]
  }
};