const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');

const router = express.Router();

/**
 * Step 1 of forgot password process
 */
router.post('/forgot-password', (req, res) => {
    const {
        username,
        email,
    } = req.body;
    const queryText = `SELECT * FROM "user" WHERE username=$1, email=$2;`

    pool.query(queryText,
        [
            username,
            email,
        ])
        .then((dbResponse) => {
            const matchedUsers = dbResponse.rows;

            if (matchedUsers.length === 0) {
                res.status(406); // Not Acceptable
                res.send({
                    message: 'The user information provided is not correct.',
                })
            }

            // send message to user with reset value
            
        })
        .catch((err) => {
            res.status(500);
            res.send({
                error: err,
                message: 'There was an error on the server sending a password reset message.',
            });
        });
});