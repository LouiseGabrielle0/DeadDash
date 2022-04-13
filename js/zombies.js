class Zombie {
  constructor() {
    this.div = null;
    this.height = 8.5;
    this.width = 3.1;
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
      wait(100)
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
    }
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
  // final zombie hopefully moving down
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
