const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const nodemailer = require('nodemailer');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {  
  const {
    username,
    firstName,
    lastName,
    email,
  } = req.body;
  const password = encryptLib.encryptPassword(req.body.password);
  const createdDate = new Date();

  const queryText = `INSERT INTO "user" (username, password, first_name, last_name, email, created_at, updated_at)
                      VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;
  pool.query(queryText,
    [
      username,
      password,
      firstName,
      lastName,
      email,
      createdDate,
      createdDate,
    ])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Error Registering User: ', err);
      res.sendStatus(500)
    });
});

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

/**
 * Records the user's security question choice and their answer.
 * The security question is used for resetting the user's password
 * or updating the user's information.
 */
router.post('/security/:userId', (req, res) => {
  const {
    questionId,
    answer,
  } = req.body;
  const userId = req.param.userId;
  const queryText = `INSERT INTO "user_security_questions" (user_id, security_question_id, answer)
                      VALUES ($1, $2, $3);`;

  pool.query(queryText,
    [
      userId,
      questionId,
      answer,
    ])
    .then((response) => {
      res.sendStatus(201);
    })
    .catch((err) => {
      console.log('POST security:', err);
      res.status(500)
      res.send({
        error: err,
      })
    })
});

/**
 * Retrieves all available security questions.
 */
router.get('/questions', (req, res) => {
  const queryText = `SELECT * FROM "security_questions";`;

  pool.query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      res.status(500);
      res.send({
        error: err,
      });
    });
});

module.exports = router;
