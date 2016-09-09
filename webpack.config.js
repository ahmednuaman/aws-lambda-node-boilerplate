module.exports = {
  entry: './index.js',
  output: {
    path: './build',
    filename: 'index.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  externals: [{
    'aws-sdk': 'require("aws-sdk")'
  }],
  target: 'node'
}
