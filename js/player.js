class Player {
  constructor() {
    this.div = null;
    this.height = 8.5;
    this.width = 4;
    this.positionY = 35;
    this.positionX = 25;
    this.health = 100;
    this.score = 0;
  }

  moveLeft() {
    this.positionX--;
  }

  moveRight() {
    this.positionX++;
  }

  moveDown() {
    this.positionY--;
  }

  moveUp() {
    this.positionY++;
  }

  movePlayer(direction) {
    if (direction === "left" && game.player.positionX > 0) {
      game.player.moveLeft();
    } else if (direction === "right" && game.player.positionX < 45) {
      game.player.moveRight();
    } else if (direction === "up" && game.player.positionY < 55) {
      game.player.moveUp();
    } else if (direction === "down" && game.player.positionY > 0) {
      game.player.moveDown();
    }
    game.drawNewElement(game.player);
  }
}
