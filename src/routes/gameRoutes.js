const express = require('express');
const router = express.Router();
const validatePlayerId = require('../middlewere/validatePlayerId');
const { getPlayer, click } = require('../controllers/gameController');

// GET /api/player/:playerId — получить счёт
router.get('/player/:playerId', validatePlayerId, getPlayer);

// POST /api/player/:playerId/click — кликнуть
router.post('/player/:playerId/click', validatePlayerId, click);

module.exports = router;