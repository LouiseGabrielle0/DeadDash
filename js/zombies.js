class Zombie {
  constructor() {
    this.height = 16;
    this.width = 5;
    this.positionX = 0;
    this.positionY = Math.floor(Math.random() * 60)
  }

  moveZombieLeft() {
    this.positionX--;
  }

  moveZombieRight() {
    this.positionX++;
  }

  
    
  
}

class ZombieMark extends Zombie {
  constructor() {
    super();
    this.div = null;
    this.height = 16;
    this.width = 6;
    this.positionX = 0;
    this.positionY = Math.floor(Math.random() * 50)
  }

  deleteZombieMark(zombie) {
    if (zombie.positionX === 48) {
    zombie.div.remove(zombie)
    game.ZombieArr.splice(game.ZombieArr.indexOf(zombie),1)}
}    
}

class ZombieJay extends Zombie {
  constructor() {
    super();
  }

  moveZombieLeftFaster() {
    this.positionX -= 1.2;
  }

  moveZombieRightFaster() {
    this.positionX += 1.2;
  }
}

class ZombieKaren extends Zombie {
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
