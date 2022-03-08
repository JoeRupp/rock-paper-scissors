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
};
