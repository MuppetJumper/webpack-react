var path = require('path');

module.exports = {
  entry: './src/jsx/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  module: {
    rules: [ {
        test: /\.css$/,
        use: [
              'style-loader',
              'css-loader'
        ]
      }, {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
                loader: 'url-loader',
                options: {
                    limit: 8000
                }
            }]
        }
    ]
  }
};
