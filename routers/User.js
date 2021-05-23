const express = require('express');
const router = express.Router();
const userService = require('./../modules/user.js');

// User Routes
router.post('/', createUser);
router.put('/', updateUser);
router.put('/calendar', updateUserNotes);
router.get('/', getUser);

function createUser(req, res, next) {
	userService.create(req.body)
		.then(success => res.json(success))
}

function getUser(req, res, next) {
	userService.fetch(req)
		.then(user => res.json(user))
}

function updateUser(req, res, next) {
	userService.update(req.body)
		.then(success => res.json(success))
}

function updateUserNotes(req, res, next) {
	userService.updateNotes(req.body)
		.then(success => res.json(success))
}

module.exports = router;
