var path = require('path');

module.exports = {
  entry: './src/js/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    rules: [ {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }
};
