var currentGame;

var userWins = document.querySelector('.user-wins');
var enemyWins = document.querySelector('.enemy-wins');

var gameModeView = document.querySelector('.game-mode');
var classicGameMode = document.querySelector('.classic-choice');
var extremeGameMode = document.querySelector('.extreme-choice');

var selectionView = document.querySelector('.selection');
var fireChampion = document.querySelector('.fire');
var earthChampion = document.querySelector('.earth');
var waterChampion = document.querySelector('.water');
var airChampion = document.querySelector('.air');
var voidChampion = document.querySelector('.void');

var championSelection = document.querySelector('.champion-options')

var battleView = document.querySelector('.battle');
var battleOutcome = document.querySelector('.outcome');
var userChampion = document.querySelector('.user-champion');
var enemyChampion = document.querySelector('.enemy-champion');

var changeGameButton = document.querySelector('button');

var champions = [
  {name: 'fire', image: './assets/pigeon-fire-L.png'},
  {name: 'earth', image: './assets/pigeon-earth-L.png'},
  {name: 'water', image: './assets/pigeon-water-L.png'},
  {name: 'air', image: './assets/pigeon-air-L.png'},
  {name: 'void', image: './assets/pigeon-void-L.png'}
];

window.addEventListener('load', makeNewGame);

classicGameMode.addEventListener('click', selectClassicDifficulty);
extremeGameMode.addEventListener('click', selectExtremeDifficulty);

changeGameButton.addEventListener('click', goToGameModeView);

championSelection.addEventListener('click', function(event) {
  if (event.target.dataset.element === 'champion') {
    for (var i = 0; i < champions.length; i++) {
      if (champions[i].name === event.target.id) {
        currentGame.user.takeTurn(champions[i]);
      }
    }
  }
  currentGame.enemy.enemyTurn(currentGame.difficulty);
  goToBattleView();
  displayChampions();
  setTimeout(selectExtremeDifficulty, 1500);
});

function makeNewGame() {
  currentGame = new Game();
}

function selectClassicDifficulty() {
  gameModeView.classList.add('hidden');
  selectionView.classList.remove('hidden');
  changeGameButton.classList.remove('hidden');
  airChampion.classList.add('hidden');
  voidChampion.classList.add('hidden');
  var difficultyChoice = 'Classic';
  currentGame.chooseDifficulty(difficultyChoice);
}

function selectExtremeDifficulty() {
  gameModeView.classList.add('hidden');
  selectionView.classList.remove('hidden');
  changeGameButton.classList.remove('hidden');
  var difficultyChoice = 'Extreme';
  currentGame.chooseDifficulty(difficultyChoice);
}

function goToGameModeView() {
  gameModeView.classList.remove('hidden');
  selectionView.classList.add('hidden');
  changeGameButton.classList.add('hidden');
  airChampion.classList.remove('hidden');
  voidChampion.classList.remove('hidden');
}

function goToBattleView() {
  gameModeView.classList.add('hidden');
  selectionView.classList.add('hidden');
  changeGameButton.classList.add('hidden');
  battleView.classList.remove('hidden');
}

function displayChampions() {
  userChampion.style.backgroundImage = `url(${currentGame.user.champion.image})`;
  enemyChampion.style.backgroundImage = `url(${currentGame.enemy.champion.image})`;
}
// BACKUP ---------------------------------------

// fireChampion.addEventListener('click', function() {
//   currentGame.user.takeTurn('Fire');
//   currentGame.enemy.enemyTurn(currentGame.difficulty);
// });
//
// earthChampion.addEventListener('click', function() {
//   currentGame.user.takeTurn('Earth');
//   currentGame.enemy.enemyTurn(currentGame.difficulty);
// });
//
// waterChampion.addEventListener('click', function() {
//   currentGame.user.takeTurn('Water');
//   currentGame.enemy.enemyTurn(currentGame.difficulty);
// });
//
// airChampion.addEventListener('click', function() {
//   currentGame.user.takeTurn('Air');
//   currentGame.enemy.enemyTurn(currentGame.difficulty);
// });
//
// voidChampion.addEventListener('click', function() {
//   currentGame.user.takeTurn('Void');
//   currentGame.enemy.enemyTurn(currentGame.difficulty);
// });
