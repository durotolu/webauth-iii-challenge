const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./auth/auth-router');
//const middleware = require('./auth/auth-middleware')

const server = express();

//const Users = require('./users/users-model');

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);

// server.get('/api/users', middleware.sessionAuth, (req, res) => {
//     Users.find()
//         .then(users => {
//             res.json(users);
//         })
//         .catch(error => {
//             res.send(error);
//         });
// });

server.get('/', (req, res) => {
    res.send('o boy!!!')
})


module.exports = server;