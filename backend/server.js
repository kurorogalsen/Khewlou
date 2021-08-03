const http = require('http');
const app = require('./app.js');

app.set(3000);

const myServer = http.createServer(app);

myServer.listen(3000);