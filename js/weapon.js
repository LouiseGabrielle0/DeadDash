const player = new Player();

class Weapon {
  constructor(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
    this.div = null;
    this.width = 0.2;
    this.height = 0.2;
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

  detectBulletCollisionLeft(item) {
    game.bulletLeftArr.forEach((bullet) => {
      if (
        bullet.positionX < item.positionX + item.width &&
        bullet.positionX + bullet.width > item.positionX &&
        bullet.positionY < item.positionY + item.height &&
        bullet.height + bullet.positionY > item.positionY
      ) {
        player.score += 50;
        zombie.removeZombie(item)
        this.deleteBulletLeft(bullet);
        console.log(player.score);
            }
    });
  }


  detectBulletCollisionRight(item) {
    game.bulletRightArr.forEach((bullet) => {
      if (
        bullet.positionX < item.positionX + item.width &&
        bullet.positionX + bullet.width > item.positionX &&
        bullet.positionY < item.positionY + item.height &&
        bullet.height + bullet.positionY > item.positionY
      ) {
        player.score += 50;
        zombie.removeZombie(item)
        this.removeBullet(bullet)
        console.log(player.score);
        }

        
      })}

      removeBullet(bullet){
        bullet.div.remove(bullet);
        game.bulletLeftArr.splice(game.bulletLeftArr.indexOf(bullet), 1);
        game.bulletRightArr.splice(game.bulletRightArr.indexOf(bullet), 1);
      }
  

  deleteBulletLeft(bullet) {
    if (bullet.positionX < 0) {
      bullet.div.remove(bullet);
      game.bulletLeftArr.splice(game.bulletLeftArr.indexOf(bullet), 1);
    }
  }

  deleteBulletRight(bullet) {
    if (bullet.positionX > 48) {
      bullet.div.remove(bullet);
      game.bulletRightArr.splice(game.bulletRightArr.indexOf(bullet), 1);
    }
  }
}
