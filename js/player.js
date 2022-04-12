class Player {
  constructor() {
    this.div = null
    this.height = 15;
    this.width = 5;
    this.positionX = 50;
    this.positionY = 50;
  }

  moveLeft() {
    this.positionX--;
  }

  moveRight() {
    this.positionX++;
  }

  moveDown() {
    this.positionY++;
  }

  moveUp() {
    this.positionY--;
  }
}
