class Player {
  constructor(name) {
    this.name = name;
    this.numOfWins = 0;
    this.champion = '';
  }

  chooseChampion(selection) {
    if (selection === 'Fire') {
      this.champion = 'Fire';
    } else if (selection === 'Water') {
      this.champion = 'Water';
    } else if (selection === 'Earth') {
      this.champion = 'Earth';
    } else if (selection === 'Air') {
      this.champion = 'Air';
    } else (selection === 'Void') {
      this.champion = 'Void';
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
