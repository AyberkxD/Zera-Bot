var http = require('http');

http.createServer(function (req, res) {
  res.write("Bot Aktif!");
  res.end();
  }).listen(8080);