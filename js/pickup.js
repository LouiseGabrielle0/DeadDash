class PickUp {
  constructor() {
    this.positionX = Math.floor(Math.random() * 48);
    this.positionY = Math.floor(Math.random() * 50);
    this.div = null;
    this.width = 3;
    this.height = 3.5;
    this.waterArr = [];
    this.medkitArr = [];
    this.partsArr = [];
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
          pickUp.removePickup(item);
          break;
        case "medkit":
          player.health += 20;
          increaseHealth("medkit");
          pickUp.removePickup(item);
        case "parts":
          player.score += 100;
          displayScore();
          pickUp.removePickup(item);
      }
    }
  }

  removePickup(item) {
    switch (item.div.className) {
      case "water":
        pickUp.waterArr.splice(pickUp.waterArr.indexOf(item), 1);
        item.div.remove(item);
        break;
      case "medkit":
        pickUp.medkitArr.splice(pickUp.medkitArr.indexOf(item), 1);
        item.div.remove(item);
        break;
      case "parts":
        pickUp.partsArr.splice(pickUp.partsArr.indexOf(item), 1);
        item.div.remove(item);
        break;
    }
  }
}

class Water extends PickUp {
  constructor() {
    super();

  }
}

class Parts extends PickUp {
  constructor() {
    super();

  }
}

class Medkit extends PickUp {
  constructor() {
    super();
    this.width = 4;
    this.height = 4.5;
  }
}
