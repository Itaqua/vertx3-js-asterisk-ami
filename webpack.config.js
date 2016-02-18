/*
config for webpack. Will be used in
the Gulpfile for building our app.
Does not need gulp in order to do so,
but we use gulp to orchestrate
 */
module.exports = {
  output: {
    filename: "[name].js"
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.html$/, loader: 'raw' },
      { test: /(\.js$)|(\.jsx$)/,
        loader: 'babel',
        query: {
            // https://github.com/babel/babel-loader#options
            cacheDirectory: true,
            presets: ['es2015', 'react', 'stage-0']
        },
        exclude: /node_modules/
      }
    ]
  }
};
