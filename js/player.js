class Player {
  constructor() {
    this.div = null
    this.height = 8.5;
    this.width = 3;
    this.positionY = 48;
    this.positionX = 11;
    this.health = 100
    this.score = 0
    
  }

  moveLeft() {
    this.positionX--;
  }

  moveRight() {
    this.positionX++;
  }

  moveDown() {
    this.positionY--
  }

  moveUp() {
    this.positionY++;
  }
  
}
