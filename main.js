var currentGame;

var champions = ['Fire', 'Earth', 'Water', 'Air', 'Void'];

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

var battleView = document.querySelector('.battle');
var battleOutcome = document.querySelector('.outcome');
var userChampion = document.querySelector('.user-champion');
var enemyChampion = document.querySelector('.enemy-champion');

var changeGameButton = document.querySelector('button');

window.addEventListener('load', makeNewGame);

classicGameMode.addEventListener('click', selectClassicDifficulty);
extremeGameMode.addEventListener('click', selectExtremeDifficulty);

// fireChampion.addEventListener('click', );
// earthChampion.addEventListener('click', );
// waterChampion.addEventListener('click', );
// airChampion.addEventListener('click', );
// voidChampion.addEventListener('click', );

changeGameButton.addEventListener('click', goToGameModeView);

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
