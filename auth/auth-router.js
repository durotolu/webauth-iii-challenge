const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/users-model')
const generateToken = require('./token-generator')

router.post('/register', (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
        .then(savedUser => {
            res.status(201).json(savedUser);
        })
        .catch(error => {
            res.status(500).json(error.message);
        });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;
  
    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({
            message: `Welcome ${user.username}!`,
            token: token,
          });
        } else {
          res.status(401).json({ message: 'Invalid Credentials' });
        }
      })
      .catch(error => {
        res.status(500).json(error.message);
      });
  });

  module.exports = router;