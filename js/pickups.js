class PickUps {
  constructor() {
    this.positionX = Math.floor(Math.random() * 85);
    this.positionY = Math.floor(Math.random() * 60);
    this.div = null;
    this.width = 2;
    this.height = 3.5;
    this.healthArr = [];
    this.bonusArr = [];
  }

  detectPickUpCollection(item) {
    if (
      game.player.positionX < item.positionX + item.width &&
      game.player.positionX + game.player.width > item.positionX &&
      game.player.positionY < item.positionY + item.height &&
      game.player.height + game.player.positionY > item.positionY
    ) {
      switch (item.div.className) {
        case "water":
          player.health += 20;
          increaseHealth("water");
          break;
        case "medpack":
          player.health += 20;
          increaseHealth("medpack");
        case "bonus":
          player.score += 100;
          displayScore();
      }
    }
  }
}

class Water extends PickUps {
  constructor() {
    super();
  }
}

class Bonus extends PickUps {
  constructor() {
    super();
  }
}

class Water extends PickUps {
  constructor() {
    super();
  }
}
