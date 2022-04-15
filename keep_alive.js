var http = require('http');

http.createServer(function (req, res){
  res.write("Botunuz 724 Aktif Hale Getirilmiştir");
  res.end();
}).listen(8080);
