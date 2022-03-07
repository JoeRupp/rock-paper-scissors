class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.numOfWins = 0;
    this.champion = '';
  }

  takeTurn(selection) {
    this.champion = selection;
  }

  enemyTurn(difficulty) {
    if (difficulty === 'Classic') {
      var i = Math.floor(Math.random() * 3);
      this.champion = champions[i];
    } else if (difficulty === 'Extreme') {
      var i = Math.floor(Math.random() * 5);
      this.champion = champions[i];
    }
  }
};
