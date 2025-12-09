// Хранилище игроков (в памяти)
const players = {};

// Получить прогресс игрока
const getPlayer = (req, res) => {
  const { playerId } = req;
  const player = players[playerId] || { id: playerId, score: 0 };
  res.json(player);
};

// Увеличить счёт (клик)
const click = (req, res) => {
  const { playerId } = req;
  const points = req.body.points || 1;

  if (!players[playerId]) {
    players[playerId] = { id: playerId, score: 0 };
  }

  players[playerId].score += points;
  res.json({ score: players[playerId].score });
};

module.exports = {
  getPlayer,
  click
};