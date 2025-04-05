
let gameData = {
  money: 10000,
  energy: 100,
  day: 1
};

function startNewGame() {
  gameData = { money: 10000, energy: 100, day: 1 };
  saveGame();
  renderGame();
}

function continueGame() {
  const saved = localStorage.getItem('villanystart');
  if (saved) gameData = JSON.parse(saved);
  renderGame();
}

function saveGame() {
  localStorage.setItem('villanystart', JSON.stringify(gameData));
}

function renderGame() {
  const game = document.getElementById('game');
  game.innerHTML = `
    <h2>Napi feladatok – Nap ${gameData.day}</h2>
    <p>Pénz: ${gameData.money} Ft</p>
    <p>Energia: ${gameData.energy} %</p>
    <button onclick="doJob()">Megrendelés teljesítése</button>
    <button onclick="nextDay()">Következő nap</button>
  `;
}

function doJob() {
  if (gameData.energy >= 20) {
    gameData.money += 5000;
    gameData.energy -= 20;
    saveGame();
    renderGame();
  } else {
    alert("Túl fáradt vagy dolgozni!");
  }
}

function nextDay() {
  gameData.day++;
  gameData.energy = 100;
  saveGame();
  renderGame();
}
