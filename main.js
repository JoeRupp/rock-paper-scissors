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

var battleView = document.querySelector('.battle');
var battleOutcome = document.querySelector('.outcome');
var userChampion = document.querySelector('.user-champion');
var enemyChampion = document.querySelector('.enemy-champion');

var changeGameButton = document.querySelector('button');

window.addEventListener('load', makeNewGame);

classicGameMode.addEventListener('click', )
extremeGameMode.addEventListener('click', )

fireChampion.addEventListener('click', )
earthChampion.addEventListener('click', )
waterChampion.addEventListener('click', )
airChampion.addEventListener('click', )
voidChampion.addEventListener('click', )

changeGameButton.addEventListener('click', )

function makeNewGame() {
  currentGame = new Game();
}
