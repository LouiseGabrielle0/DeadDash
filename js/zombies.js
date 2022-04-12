class Zombie {
  constructor() {
    this.height = 8.5;
    this.width = 3;
    this.positionX = 0;
    this.positionY = Math.floor(Math.random() * 60);
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
      deductHealth();
    }
  }

  removeZombie(zombie) {
    switch (zombie.div.className) {
      case "zombieMark":
        zombie.div.remove(zombie);
        game.zombieFasterArr.splice(game.zombieFasterArr.indexOf(zombie), 1);
        break;
      case "zombieKaren":
        zombie.div.remove(zombie);
        game.zombieFasterArr.splice(game.zombieFasterArr.indexOf(zombie), 1);
        break;
    }
  }
}

class ZombieMark extends Zombie {
  constructor() {
    super();
    this.div = null;
    this.height = 16;
    this.width = 6;
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
    this.div = null;
    this.height = 16;
    this.width = 6;
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
  }

  moveZombieLeftFastest() {
    this.positionX -= 1.5;
  }

  moveZombieRightFastest() {
    this.positionX += 1.5;
  }
}
