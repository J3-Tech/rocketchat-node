var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')
var pkg = require('./package.json')

var nodeConfig = {
  devtool: 'source-map',
  entry: ['./src/index.js'],
  output: {
    path: './bin',
    filename: 'rocketchat.bundle.js',
    libraryTarget: 'commonjs2'
  },
  externals: [nodeExternals()],
  target: 'node',
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['latest', 'stage-0'],
        plugins: ['transform-object-rest-spread', 'transform-async-to-generator']
      }
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  }
}




var compiler = webpack([nodeConfig])
var postProcess = function(err, stats) {
  if (err) throw err
  console.log(stats.toString('minimal'))
}

if (process.argv.indexOf('--compile') !== -1) {
  compiler.run(postProcess)
} else if (process.argv.indexOf('--watch') !== -1) {
  compiler.watch(null, postProcess)
}

module.exports = {
  node: nodeConfig
}
