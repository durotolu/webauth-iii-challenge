const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router');
const userRouter = require('./users/users-router')

const server = express();

//const Users = require('./users/users-model');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);

server.use('/api/user', userRouter);

server.get('/', (req, res) => {
    res.send('o boy!!!')
})


module.exports = server;