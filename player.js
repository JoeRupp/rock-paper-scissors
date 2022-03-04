class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.numOfWins = 0;
    this.champion = '';
  }

  takeTurn(selection) {
    this.champion = selection;
    // if (selection === 'Fire') {
    //     this.champion = 'Fire';
    //   } else if (selection === 'Earth') {
    //     this.champion = 'Earth';
    //   } else if (selection === 'Water') {
    //     this.champion = 'Water';
    //   } else if (selection === 'Air') {
    //     this.champion = 'Air';
    //   } else if (selection === 'Void') {
    //     this.champion = 'Void';
    //   }
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

  battleOutcome(outcome) {
    if (outcome === 'Winner') {
      this.numOfWins++;
      return 'You Won!';
    } else if (outcome === 'Tie') {
      return 'Tie!';
    } else if (outcome === 'Loser'){
      return 'You Lost!';
    }
  }

};
