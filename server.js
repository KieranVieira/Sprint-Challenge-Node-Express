const express = require('express');
const helmet = require('helmet'); 
const cors = require('cors');
const projectRouter = require('./routes/project-router');
const actionRouter = require('./routes/action-router');

const server = express()

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter)

module.exports = server;