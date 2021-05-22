const express = require('express');
const router = express.Router();
const userService = require('./../modules/user.js');

// User Routes
router.post('/', createUser);
router.put('/', updateUser);
router.get('/', getUser);

function createUser(req, res, next) {
	userService.create(req)
		.then(user => res.json(user))
}

function getUser(req, res, next) {
	userService.fetch(req)
		.then(user => res.json(user))
}

function updateUser(req, res, next) {
	userService.update(req)
		.then(user => res.json(user))
}

module.exports = router;
