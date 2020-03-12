const express = require('express');

const router = express.Router();

const User = require('./userDb.js');

const Post = require('../posts/postDb.js');

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware
// VALIDATE USER ID MIDDLEWARE
function validateUserId(req, res, next) {
  User.getById(req.params.id)
    .then(user => {
      if(user.id) {
        req.user = user;
      }
      next();
    })
    .catch(err => {
      res.status(400).json({ message: "Invalid user ID" });
    });
}

// VALIDATE USER MIDDLEWARE
function validateUser(req, res, next) {
  if(!req.body) {
    res.status(400).jason({ message: "Missing user data." });
  }
  else if(!req.body.name) {
    res.status(400).jason({ message: "Missing required name field." });
  }
  next();
}

// VALIDATE POST MIDDLEWARE
function validatePost(req, res, next) {
  if(!req.body) {
    res.status(400).jason({ message: "Missing post data." });
  }
  else if(!req.body.text) {
    res.status(400).jason({ message: "Missing required text field." });
  }
  next();
}

module.exports = router;
