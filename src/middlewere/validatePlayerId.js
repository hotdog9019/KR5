// Проверяет наличие playerId в query, params или body
const validatePlayerId = (req, res, next) => {
  const playerId = req.params.playerId || req.query.playerId || req.body.playerId;

  if (!playerId || typeof playerId !== 'string' || playerId.trim() === '') {
    return res.status(400).json({ error: 'Поле playerId обязательно и должно быть непустой строкой' });
  }

  req.playerId = playerId.trim();
  next();
};

module.exports = validatePlayerId;