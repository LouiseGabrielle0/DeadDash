class Weapon {
  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.div = null;
    this.width = 0.5;
    this.height = 0.5;
  }

  moveRight() {
    this.positionX += 3;
  }

  moveLeft() {
    this.positionX -= 3;
  }

  moveUp() {
    this.positionY++;
  }


  deleteBulletLeft(bullet) {
    if (bullet.positionX === 0) {
      bullet.div.remove(bullet);
      game.bulletLeftArr.splice(game.bulletLeftArr.indexOf(bullet), 1);
    }
  }

  deleteBulletRight(bullet) {
    if (bullet.positionX === 48) {
      bullet.div.remove();
      game.bulletRightArr.splice(game.bulletRightArr.indexOf(bullet), 1);
    }
  }
}
