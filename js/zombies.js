class Zombie {
  constructor() {
    this.height = 16;
    this.width = 5;
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
      console.log("collision detected");
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
      game.ZombieArr.splice(game.ZombieArr.indexOf(zombie), 1);
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
