const express = require('express');
const parser = require('body-parser');
const path = require('path');

const server = express();
const port = 3000;

server.use(express.static(path.join(__dirname, '../dist')));
server.use(parser.json());
server.use(parser.urlencoded({ extended: true }));

server.listen(port, () => console.log('server is listening on port', port));
