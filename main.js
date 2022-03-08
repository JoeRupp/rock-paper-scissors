 // VARIABLES ----------------------------------------

var currentGame;

var userWins = document.querySelector('.user-wins');
var enemyWins = document.querySelector('.enemy-wins');
var userIcon = document.querySelector('.token')

var gameModeView = document.querySelector('.game-mode');
var classicGameMode = document.querySelector('.classic-choice');
var extremeGameMode = document.querySelector('.extreme-choice');

var selectionView = document.querySelector('.selection');
var championSelection = document.querySelector('.champion-options')
var airChampion = document.querySelector('.air');
var voidChampion = document.querySelector('.void');

var battleView = document.querySelector('.battle');
var battleOutcome = document.querySelector('.outcome');
var userChampion = document.querySelector('.user-champion');
var enemyChampion = document.querySelector('.enemy-champion');

var footer = document.querySelector('footer');

var changeGameButton = document.querySelector('.change-btn');
var resetScoreButton = document.querySelector('.reset-btn');
var changeIconButton = document.querySelector('.icon-btn');

var champions = [
  {name: 'fire', image: './assets/pigeon-fire-L.png', weakness: ['water', 'air']},
  {name: 'earth', image: './assets/pigeon-earth-L.png', weakness: ['fire', 'void']},
  {name: 'water', image: './assets/pigeon-water-L.png', weakness: ['earth', 'void']},
  {name: 'air', image: './assets/pigeon-air-L.png', weakness: ['earth', 'water']},
  {name: 'void', image: './assets/pigeon-void-L.png', weakness: ['fire', 'air']}
];

 // EVENT LISTENERS ----------------------------------------

window.addEventListener('load', makeNewGame);

classicGameMode.addEventListener('click', selectClassicDifficulty);
extremeGameMode.addEventListener('click', selectExtremeDifficulty);

changeGameButton.addEventListener('click', goToGameModeView);
resetScoreButton.addEventListener('click', resetScore);

championSelection.addEventListener('click', function(event) {
  if (event.target.dataset.element === 'champion') {
    for (var i = 0; i < champions.length; i++) {
      if (champions[i].name === event.target.id) {
        currentGame.user.takeTurn(champions[i]);
      }
    }
  }
  currentGame.enemy.enemyTurn(currentGame.difficulty);
  battleChampions();
});

 // FUNCTIONS ----------------------------------------

function makeNewGame() {
  currentGame = new Game();
};

function selectClassicDifficulty() {
  gameModeView.classList.add('hidden');
  selectionView.classList.remove('hidden');
  changeGameButton.classList.remove('hidden');
  footer.classList.remove('hidden');
  airChampion.classList.add('hidden');
  voidChampion.classList.add('hidden');
  battleView.classList.add('hidden');
  var difficultyChoice = 'Classic';
  currentGame.chooseDifficulty(difficultyChoice);
};

function selectExtremeDifficulty() {
  gameModeView.classList.add('hidden');
  selectionView.classList.remove('hidden');
  changeGameButton.classList.remove('hidden');
  footer.classList.remove('hidden');
  battleView.classList.add('hidden');
  var difficultyChoice = 'Extreme';
  currentGame.chooseDifficulty(difficultyChoice);
};

function goToGameModeView() {
  gameModeView.classList.remove('hidden');
  selectionView.classList.add('hidden');
  changeGameButton.classList.add('hidden');
  footer.classList.remove('hidden');
  airChampion.classList.remove('hidden');
  voidChampion.classList.remove('hidden');
};

function goToBattleView() {
  gameModeView.classList.add('hidden');
  selectionView.classList.add('hidden');
  changeGameButton.classList.add('hidden');
  footer.classList.add('hidden');
  battleView.classList.remove('hidden');
};

function battleChampions() {
  currentGame.battle();
  goToBattleView();
  displayChampions();
  updateScore();
  revealScoreButton();
  if (currentGame.difficulty === 'Extreme') {
    setTimeout(selectExtremeDifficulty, 1500);
  } else {
    setTimeout(selectClassicDifficulty, 1500);
  }
};

function displayChampions() {
  userChampion.style.backgroundImage = `url(${currentGame.user.champion.image})`;
  enemyChampion.style.backgroundImage = `url(${currentGame.enemy.champion.image})`;
  battleOutcome.innerText = currentGame.outcome;
};

function updateScore() {
  userWins.innerText = `wins: ${currentGame.user.numOfWins}`;
  enemyWins.innerText = `wins: ${currentGame.enemy.numOfWins}`;
};

function revealScoreButton() {
  if (currentGame.user.numOfWins > 0 || currentGame.enemy.numOfWins > 0) {
    resetScoreButton.classList.remove('hidden');
  }
};

function resetScore() {
  currentGame.user.numOfWins = 0;
  currentGame.enemy.numOfWins = 0;
  updateScore();
  resetScoreButton.classList.add('hidden');
};
