const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

const db = require('../../models/');

// ROUTE 1 ----------------------------------------------------------
// @route      POST api/users/register/manager
// @desc       manager registers self
// @access     public
router.post('/register/manager', (req, res) => {
  const password = req.body.password;
  const saltRounds = 10;

  bcrypt.hash(password, saltRounds, function(err, hash) {
    let newUser = {
      username: req.body.username,
      password: hash,
      role: 'Manager'
    };
    db.User.create(newUser)
      .then(r => {
        return console.log(newUser);
      })
      .catch(err => {
        console.error(err);
        return res.status(500).json({ errors: err });
      });
  });
});

// ROUTE 2 ----------------------------------------------------------
// @route      POST api/users/login
// @desc       user login
// @access     public
router.post('/login', (req, res) => {
  db.User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(response => {
      if (!response) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      bcrypt
        .compare(req.body.password, response.hash)
        .then(match => {
          if (match) {
            // req.session.user = response;
            return res.status(200).send('Successful Login');
          }
          return res.status(401).send('Invalid Credentials');
        })
        .catch(err => {
          return res.status(500).send(err.message);
        });
    })
    .catch(e => {
      console.error(e);
      return res.status(500).json({ errors: e });
    });
});

// ROUTE 3 ----------------------------------------------------------
// @route      POST api/users/register/employee
// @desc       manager registers new employee
// @access     private
router.post('/register/employee', (req, res) => {
  const password = req.body.password;
  const saltRounds = 10;

  bcrypt.hash(password, saltRounds, function(err, hash) {
    let newUser = {
      username: req.body.username,
      password: hash,
      role: 'Employee'
    };
    db.User.create(newUser)
      .then(r => {
        return console.log(newUser);
      })
      .catch(err => {
        console.error(err);
        return res.status(500).json({ errors: err });
      });
  });
});

// ROUTE 9 ----------------------------------------------------------
// @route      GET api/users
// @desc       get all users
// @access     private
router.get('/', (req, res) => {
  db.User.findAll({})
    .then(response => {
      if (!response) {
        return res.status(400).json({ errors: [{ msg: 'No tickets exist' }] });
      }

      return res.status(200).send(response);
    })
    .catch(e => {
      console.error(e);
      return res.status(500).json({ errors: e });
    });
});

module.exports = router;
