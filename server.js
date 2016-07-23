var path = require('path')
var express = require('express')
var serverRender = require('./dist/server.js')
var favicon = require('serve-favicon')
var compression = require('compression');
var bunyan = require('bunyan')
global.logger = bunyan.createLogger({name: 'server', level: 'trace'});

var app = express()
var isDev = process.env.NODE_ENV === 'development'
var defaultPort = isDev? 3000 : 8300
var port = process.env.PORT || defaultPort

app.use(express.static(path.join(__dirname, 'dist')))

if (isDev) {
  var config = require('./webpack/webpack.config.dev.client.js')
  var compiler = require('webpack')(config)
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: false,
    hot:true,
    inline: true,
    publicPath: config.output.publicPath,
    stats: {
      colors: true
    }
  }))
  app.use(require('webpack-hot-middleware')(compiler))
}else{
  app.use(compression());
  app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')))
  app.set('views', path.join(__dirname, 'dist'))
  app.set('view engine', 'ejs')
}

app.get('*', function (req, res, next) {
  serverRender.default(req, res);
  // // res.sendFile(path.join(__dirname, '../index.html'));
})

app.listen(port, function(err) {
  if (err) {
    global.logger.error(err);
  } else {
    global.logger.info(`==> Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
})