'use strict';

import app from './app';
import http from 'http';

const port = process.env.port || 3000;

let server = http.createServer(app);

server.listen(port, () => {
  console.log(`Listening on port ${ port }`);
});
