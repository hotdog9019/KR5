// Генерация или получение playerId
let playerId = localStorage.getItem('playerId');
if (!playerId) {
  playerId = 'player_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6);
  localStorage.setItem('playerId', playerId);
}
document.getElementById('playerId').textContent = playerId;

let score = 0;

// Загрузка текущего счёта
fetch(`/api/player/${playerId}`)
  .then(res => res.json())
  .then(data => {
    score = data.score;
    document.getElementById('score').textContent = score;
  })
  .catch(err => console.error('Ошибка загрузки:', err));

// Обработчик клика
document.getElementById('clickBtn').addEventListener('click', () => {
  fetch(`/api/player/${playerId}/click`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ points: 1 })
  })
    .then(res => res.json())
    .then(data => {
      score = data.score;
      document.getElementById('score').textContent = score;
    })
    .catch(err => console.error('Ошибка клика:', err));
});