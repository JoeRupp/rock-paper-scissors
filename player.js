class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.numOfWins = 0;
    this.champion = '';
  }

  // chooseChampion(selection) {
  //   if (selection === 'Fire') {
  //     this.champion = 'Fire';
  //   } else if (selection === 'Water') {
  //     this.champion = 'Water';
  //   } else if (selection === 'Earth') {
  //     this.champion = 'Earth';
  //   } else if (selection === 'Air') {
  //     this.champion = 'Air';
  //   } else (selection === 'Void') {
  //     this.champion = 'Void';
  //   }
  // }

  enemyChampion() {
    if ('Classic') {
      return Math.floor(Math.random() * 3);
    } else if ('Extreme') {
      return Math.floor(Math.random() * 5);
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
