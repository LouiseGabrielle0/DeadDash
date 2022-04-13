class Zombie {
  constructor() {
    this.div = null;
    this.height = 8.3;
    this.width = 3.1;
    this.zombieRightArr = [];
    this.zombieLeftArr = [];
  }

  moveZombieLeft() {
    this.positionX--;
  }

  moveZombieRight() {
    this.positionX++;
  }

  detectZombieCollsion(zombie) {
    if (
      game.player.positionX < zombie.positionX + zombie.width &&
      game.player.positionX + game.player.width > zombie.positionX &&
      game.player.positionY < zombie.positionY + zombie.height &&
      game.player.height + game.player.positionY > zombie.positionY
    ) {
      wait(100);
      player.health -= 10;
      deductHealth();
      if (player.health <= -1) {
        game.gameOver();
      }
    }
  }

  removeZombie(zombie) {
    switch (zombie.div.className) {
      case "zombieMark":
        game.zombieArr.splice(game.zombieArr.indexOf(zombie), 1);
        zombie.div.remove(zombie);
        break;
      case "zombieKaren":
        game.zombieFasterArr.splice(game.zombieFasterArr.indexOf(zombie), 1);
        zombie.div.remove(zombie);
        break;
      case "zombieJay":
        game.zombieFastestArr.splice(game.zombieFastestArr.indexOf(zombie), 1);
        zombie.div.remove(zombie);
        break;
    }
  }

  // Looking to add it ability to turn zombies once they reach the end of the playArea and have them go back in the opposite direction
  // turnZombieAround(zombie){
  //   switch (zombie.div.className) {
  //     case "left":
  //     zombie.div.className = "right"
  //     this.zombieLeftArr.splice(game.zombieArr.indexOf(zombie), 1);

  //   }

  // }

  turnZombieToBlood(zombie) {
    let zombiePositionX = zombie.positionX;
    let zombiePositionY = zombie.positionY;

    let bloodSplat = new BloodSplat(zombiePositionX, zombiePositionY);
    bloodSplat.div = game.createNewElement("bloodSplat");
    game.drawNewElement(bloodSplat);
  }
}

class ZombieMark extends Zombie {
  constructor() {
    super();
    this.positionX = 0;
    this.positionY = Math.floor(Math.random() * 50);
  }

  deleteZombieMark(zombie) {
    if (zombie.positionX === 48) {
      zombie.div.remove(zombie);
      game.zombieArr.splice(game.zombieArr.indexOf(zombie), 1);
    }
  }
}

class ZombieKaren extends Zombie {
  constructor() {
    super();
    this.positionX = 48;
    this.positionY = Math.floor(Math.random() * 50);
  }

  moveZombieLeftFaster() {
    this.positionX -= 1.5;
  }

  moveZombieRightFaster() {
    this.positionX += 1.5;
  }

  deleteZombieKaren(zombie) {
    if (zombie.positionX === 0 || zombie.positionX === 0.5) {
      zombie.div.remove(zombie);
      game.zombieFasterArr.splice(game.zombieFasterArr.indexOf(zombie), 1);
    }
  }
}

class ZombieJay extends Zombie {
  constructor() {
    super();
    this.positionX = Math.floor(Math.random() * 50);
    this.positionY = 60;
    this.height = 7.9;
    this.width = 2.8;
  }

  moveZombieDownFastest() {
    this.positionY -= 1.5;
  }

  moveZombieRightFastest() {
    this.positionX += 1.5;
  }

  deleteZombieJay(zombie) {
    if (zombie.positionY === 0 || zombie.positionX === 0.5) {
      zombie.div.remove(zombie);
      game.zombieFastestArr.splice(game.zombieFastestArr.indexOf(zombie), 1);
    }
  }
}

class BloodSplat extends Zombie {
  constructor(positionX, positionY) {
    super();
    this.positionX = positionX;
    this.positionY = positionY;
    this.height = 2;
    this.width = 2;
  }
}
