class Player {
  constructor() {
    this.div = null
    this.height = 8.5;
    this.width = 4;
    this.positionY = 35;
    this.positionX = 25;
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
