class Player {
  constructor() {
    this.div = null;
    this.height = 12;
    this.width = 5;
    this.positionY = 35;
    this.positionX = 25;
    this.health = 100;
    this.score = 0;
    this.level = 1;
  }

  moveLeft() {
    this.positionX -= 1.5;
  }

  moveRight() {
    this.positionX += 1.5;
  }

  moveDown() {
    this.positionY -= 1.5;
  }

  moveUp() {
    this.positionY += 1.5;
  }

  movePlayer(direction) {
    if (direction === "left" && game.player.positionX > 2) {
      game.player.moveLeft();
    } else if (direction === "right" && game.player.positionX < 90) {
      game.player.moveRight();
    } else if (direction === "up" && game.player.positionY < 68) {
      game.player.moveUp();
    } else if (direction === "down" && game.player.positionY > 2) {
      game.player.moveDown();
    }
    game.drawNewElement(game.player);
  }
}
