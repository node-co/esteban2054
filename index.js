var fs = require('fs'); //a la variable fs se le lleva el módulo fs
/*al ser readFile sin el "Sync" se conoce
como una función ASÍNCRONA y por ser asíncrona entonces necesita un callback*/
var http = require('http');

var data = fs.readFile('./public/index.html', function(err, data) {
  //la función del callback recibe como parámetro un error y el archivo
  if (err) {
    return console.log('no se pudo abrir el archivo' + err.message);
  }
  console.log(data.toString().length);
});

console.log('Hola Mundo');

var server = http.createServer(function servercallback(request, response) {
  console.log('Recibí un request ' + request.url);
  response.writeHead('Content-Type', 'text/plane'); //código para que la página pueda devolver algo
  response.end('Saludando desde el servidor iniciado'); //y no se quede en un loop infinito
});
server.listen(3000, function() {
  console.log('Servidor iniciado'); //acá el callback solo notifica que se ha iniciado el server en el puerto 3000
  console.log('escuchando en el puerto 3000');
});
