module.exports = {
  context: __dirname + '/src',
  entry: ['./app.js', 'webpack/hot/dev-server'],
  output: {
    filename: '/js/app.js',
    path: __dirname + '/dist',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        optional: ['runtime'],
        stage: 0,
      },
    }, {
      test: /(\.html|\.css)$/,
      loader: 'file?name=[path][name].[ext]?[hash]',
    },],
  },
  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules', 'web_modules'],
  },
};