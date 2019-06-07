const express = require('express');
const pool = require('../modules/pool');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const router = express.Router();

// BASE ROUTE:
// '/api/jutsu'
// --------------------

/**
 * GET all of my Jutsu Creations.
 */
router.get('/my-collection', rejectUnauthenticated, (req, res) => {
    const userId = req.user.id;
});

/**
 * GET all of my Ninja's Jutsu Creations.
 */
router.get('/my-collection/:ninjaId', rejectUnauthenticated, (req, res) => {
    const userId = req.user.id;
});

/**
 * GET all of the standard Jutsus.
 */
router.get('/library', rejectUnauthenticated, (req, res) => {
});

/**
 * POST a new Jutsu Creation to my collection.
 */
router.post('/', rejectUnauthenticated, (req, res) => {
    const userId = req.user.id;
});

module.exports = router;