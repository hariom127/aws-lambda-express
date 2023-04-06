const http = require('http');
const app = require('./app');

var httpServer = http.createServer(app);

const server = httpServer.listen(3000, () => console.log('Example app is listening on port 3000.'));