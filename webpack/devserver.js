var express = require('express');
var webpack = require('webpack');

var webpackConfig = require('./webpack.dev.client.config');
var compiler = webpack(webpackConfig);

var port = 3001;
var serverOptions = {
  contentBase: 'http://localhost:' + port,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: webpackConfig.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
};

const root = __dirname +  "/dist"
var app = express();

app.use(express.static(root));

app.use(require('webpack-dev-middleware')(compiler, serverOptions));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, function onAppListening(err) {
  if (err) {
    console.error(err);
  } else {
    console.info('Webpack development server listening on port %s', port);
  }
});