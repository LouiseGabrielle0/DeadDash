class Zombie {
  constructor() {
    this.domElement = null;
    this.height = 16;
    this.width = 5;
  }

  moveLeft() {
    this.positionX--;
  }

  moveRight() {
    this.positionX++;
  }
}

class ZombieMark extends Zombie {
  constructor() {
    super();
  }
}

class ZombieJay extends Zombie {
  constructor() {
    super();
  }

  moveLeft() {
    this.positionX -= 2;
  }

  moveRight() {
    this.positionX += 2;
  }
}

class ZombieKaren extends Zombie {
  constructor() {
    super();
  }

  moveLeft() {
    this.positionX -= 3;
  }

  moveRight() {
    this.positionX += 3;
  }
}
