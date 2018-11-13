var express = require('express'),
  app = express(),
  http = require('http'),
  httpServer = http.Server(app);

app.use(express.static(__dirname + '/dist'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/src/index.html');
});
app.listen(process.env.PORT || 8080);
