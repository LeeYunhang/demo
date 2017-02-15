var path = require('path');

module.exports = {
  entry: './code-split/app.jsx',
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
            "transform-react-jsx",
            "syntax-dynamic-import"
          ]
        }
      } 
    ]
  }
};