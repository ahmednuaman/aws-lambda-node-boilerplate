module.exports = {
  entry: './index.js',
  output: {
    libraryTarget: 'commonjs2',
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
    'aws-sdk': true
  }],
  target: 'node'
}
