const player = new Player();

class Weapon {
  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.div = null;
    this.width = 0.3;
    this.height = 0.3;
    this.bulletRightArr = [];
    this.bulletLeftArr = [];
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

  shootWeapon(direction) {
    let playerPositionX = game.player.positionX;
    let playerPositionY = game.player.positionY;
    playerPositionY += 7;

    const bullet = new Weapon(playerPositionX, playerPositionY);
    bullet.div = game.createNewElement("bullet");
    if (direction === "left") {
      pew.play();
      this.bulletLeftArr.push(bullet);
      game.drawNewElement(bullet);
    } else if (direction === "right") {
      this.bulletRightArr.push(bullet);
      game.drawNewElement(bullet);
      pew.play();
    }
  }

  detectBulletCollisionLeft(item) {
    weapon.bulletLeftArr.forEach((bullet) => {
      if (
        bullet.positionX < item.positionX + item.width &&
        bullet.positionX + bullet.width > item.positionX &&
        bullet.positionY < item.positionY + item.height &&
        bullet.height + bullet.positionY > item.positionY
      ) {
        zombie.turnZombieToBlood(item);
        zombie.removeZombie(item);
        player.score += 50;
        this.removeBullet(bullet);
        displayScore();
      }
    });
  }

  detectBulletCollisionRight(item) {
    weapon.bulletRightArr.forEach((bullet) => {
      if (
        bullet.positionX < item.positionX + item.width &&
        bullet.positionX + bullet.width > item.positionX &&
        bullet.positionY < item.positionY + item.height &&
        bullet.height + bullet.positionY > item.positionY
      ) {
        zombie.turnZombieToBlood(item);
        zombie.removeZombie(item);
        player.score += 50;
        this.removeBullet(bullet);
        displayScore();
      }
    });
  }

  removeBullet(bullet) {
    bullet.div.remove(bullet);
    this.bulletLeftArr.splice(this.bulletLeftArr.indexOf(bullet), 1);
    this.bulletRightArr.splice(this.bulletRightArr.indexOf(bullet), 1);
  }

  deleteBulletLeft(bullet) {
    if (bullet.positionX < 0) {
      bullet.div.remove(bullet);
      this.bulletLeftArr.splice(this.bulletLeftArr.indexOf(bullet), 1);
    }
  }

  deleteBulletRight(bullet) {
    if (bullet.positionX > 98) {
      bullet.div.remove(bullet);
      this.bulletRightArr.splice(this.bulletRightArr.indexOf(bullet), 1);
    }
  }

  directWeapon(direction) {
    if (direction === "left") {
      // game.player.div.style.backgroundImage =
      //   "url('../images/Louise-trimmy-left.png')";
      game.player.div.className = "playerLeft";
      this.shootWeapon(direction);
    } else if (direction === "right") {
      game.player.div.className = "playerRight";
      // game.player.div.style.backgroundImage =
      //   "url('../images/Louise-trimmy-right.png')";
      this.shootWeapon(direction);
    }
  }
}
