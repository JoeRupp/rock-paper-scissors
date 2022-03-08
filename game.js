class Game {
  constructor() {
    this.difficulty = '';
    this.user = new Player('You', './assets/user-icon.png');
    this.enemy = new Player('Enemy', './assets/enemy-icon.png');
    this.outcome = '';
  };

  chooseDifficulty(difficultyChoice) {
    if (difficultyChoice === 'Extreme') {
      this.difficulty = 'Extreme';
    } else {
      this.difficulty = 'Classic';
    }
  };

  battle() {
    if (this.enemy.champion.name === this.user.champion.weakness[0]) {
      this.enemy.numOfWins++;
      this.outcome = 'You Lost!';
    } else if (this.enemy.champion.name === this.user.champion.weakness[1]) {
      this.enemy.numOfWins++;
      this.outcome = 'You Lost!';
    } else if (this.user.champion.name === this.enemy.champion.weakness[0]) {
      this.user.numOfWins++;
      this.outcome = 'You Won!';
    } else if (this.user.champion.name === this.enemy.champion.weakness[1]) {
      this.user.numOfWins++;
      this.outcome = 'You Won!';
    } else if (this.enemy.champion.name === this.user.champion.name) {
      this.outcome = 'Tie!';
    }
  };

  resetGameScore() {
    this.user.numOfWins = 0;
    this.enemy.numOfWins = 0;
  };

  changeUserToken() {
    if (this.user.token === `./assets/user-icon.png`) {
      this.user.token = `./assets/user-icon-2.png`;
    } else if (this.user.token === `./assets/user-icon-2.png`) {
      this.user.token = `./assets/user-icon-3.png`;
    } else if (this.user.token === `./assets/user-icon-3.png`) {
      this.user.token = `./assets/user-icon.png`;
    }
  };
};
