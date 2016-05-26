var WebSocketServer = require('ws').Server
  , http = require('http')
  , express = require('express')
  , app = express();

app.use(express.static(__dirname + '/public'));

app.get('/api', (request, response) => {
    response.json({ok:'ok'}).end();
});

var server = http.createServer(app);
server.listen(8001);

var wss = new WebSocketServer({server: server});
wss.on('connection', function(ws) {
  var id = setInterval(function() {
    ws.send(JSON.stringify(process.memoryUsage()), function(error) {
        if (error) {
            console.log('Error sending message to websocket: ' + error);
        }
    });
  }, 100);
  console.log('started client interval');
  ws.on('close', function() {
    console.log('stopping client interval');
    clearInterval(id);
  });
});
