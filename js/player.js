class Player {
  constructor() {
    this.div = null
    this.height = 15;
    this.width = 5;
    this.positionY = 48;
    this.positionX = 11;
    this.playerHealth = 100
    
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
