class Game {
  constructor() {
    this.difficulty = '';
    this.user = new Player('You', './assets/user-icon.png');
    // this.userChampion = this.user.champion;
    this.enemy = new Player('Enemy', './assets/enemy-icon.png');
    // this.enemyChampion = this.enemy.champion;
    this.outcome = '';
  }

  chooseDifficulty(difficultyChoice) {
    if (difficultyChoice === 'Extreme') {
      this.difficulty = 'Extreme';
    } else {
      this.difficulty = 'Classic';
    }
  }

  battle(userChoice, enemyChoice) {
    if (userChoice === "Fire" && enemyChoice === "Earth" || "Void") {
      var outcome = 'Winner';
      this.user.battleOutcome(outcome);
    } else if (userChoice === "Earth" && enemyChoice === "Water" || "Air") {
      var outcome = 'Winner';
      this.user.battleOutcome(outcome);
    } else if (userChoice === "Water" && enemyChoice === "Fire" || "Air") {
      var outcome = 'Winner';
      this.user.battleOutcome(outcome);
    } else if (userChoice === "Air" && enemyChoice === "Void" || "Fire") {
      var outcome = 'Winner';
      this.user.battleOutcome(outcome);
    } else if (userChoice === "Void" && enemyChoice === "Earth" || "Water") {
      var outcome = 'Winner';
      this.user.battleOutcome(outcome);
    } else if (userChoice === enemyChoice) {
      var outcome = 'Tie';
      this.user.battleOutcome(outcome);
    } else {
      var outcome = 'Loser';
      this.user.battleOutcome(outcome);
    }
  }
};
