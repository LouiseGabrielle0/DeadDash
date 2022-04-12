const playArea = document.getElementById("container");
const weapon = new Weapon
const zombie = new Zombie

class Game {
  constructor() {
    this.gamerun = false;
    this.timer = null;
    this.time = 0;
    this.zombieArr = [];
    this.zombieFasterArr = [];
    this.bulletLeftArr = [];
    this.bulletRightArr = [];
    this.playerScore = 0;
  }

  createNewElement(className, Id) {
    const newElement = document.createElement("div");
    newElement.className = className;
    newElement.Id = Id;
    playArea.appendChild(newElement);
    return newElement;
  }

  drawNewElement(item) {
    item.div.style.width = item.width + "vw";
    item.div.style.height = item.height + "vh";
    item.div.style.left = item.positionX + "vw";
    item.div.style.bottom = item.positionY + "vh";
  }

  start() {
    this.player = new Player();
    this.player.div = this.createNewElement("player", "player");
    this.drawNewElement(this.player);
    addHealthBar();
  }

  runGame() {
    let slowZombie = new ZombieMark();
    slowZombie.div = this.createNewElement("zombieMark");

    this.timer = setInterval(() => {
      this.zombieArr.forEach((zombie) => {
        zombie.moveZombieRight();
        this.drawNewElement(zombie);
        zombie.detectZombieCollsion(zombie);
        zombie.deleteZombieMark(zombie);
        this.detectBulletCollisionLeft(zombie);
        this.detectBulletCollisionRight(zombie);
      });

      if (this.time % 50 === 0) {
        let slowZombie = new ZombieMark();
        slowZombie.div = this.createNewElement("zombieMark");
        this.drawNewElement(slowZombie);
        this.zombieArr.push(slowZombie);
      }

      if (this.time % 500 === 0) {
        let fastZombie = new ZombieKaren();
        fastZombie.div = this.createNewElement("zombieKaren");
        this.drawNewElement(fastZombie);
        this.zombieFasterArr.push(fastZombie);
      }

      this.zombieFasterArr.forEach((zombie) => {
        zombie.moveZombieLeftFaster();
        this.drawNewElement(zombie);
        zombie.detectZombieCollsion(zombie);
        zombie.deleteZombieKaren(zombie);
        this.detectBulletCollisionLeft(zombie);
        this.detectBulletCollisionRight(zombie);
      });

      this.bulletLeftArr.forEach((bullet) => {
        bullet.moveLeft();
        this.drawNewElement(bullet);
        weapon.deleteBulletLeft(bullet);
      });

      this.bulletRightArr.forEach((bullet) => {
        bullet.moveRight();
        this.drawNewElement(bullet);
        weapon.deleteBulletRight(bullet)
      });

      this.time++;
    }, 100);
  }

  pauseGame() {
    clearInterval(this.timer);
    this.timer = null;
    console.log("pause game");
  }

  reloadGame() {
    document.location.reload();
  }

  movePlayer(direction) {
    if (direction === "left" && this.player.positionX > 0) {
      this.player.moveLeft();
    } else if (direction === "right" && this.player.positionX < 45) {
      this.player.moveRight();
    } else if (direction === "up" && this.player.positionY < 50) {
      this.player.moveUp();
    } else if (direction === "down" && this.player.positionY > 0) {
      this.player.moveDown();
    }
    this.drawNewElement(this.player);
  }

  shootWeapon(direction) {
    let playerPositionX = this.player.positionX;
    let playerPositionY = this.player.positionY;
    playerPositionY += 5;

    const bullet = new Weapon(playerPositionX, playerPositionY);
    bullet.div = this.createNewElement("bullet");
    if (direction === "left") {
      this.bulletLeftArr.push(bullet);
      this.drawNewElement(bullet);
    } else if (direction === "right") {
      this.bulletRightArr.push(bullet);
      this.drawNewElement(bullet);
    }
  }

  
  detectBulletCollisionLeft(item) {
    game.bulletLeftArr.forEach((bullet) => {
      if (
        bullet.positionX < item.positionX + item.width &&
        bullet.positionX + bullet.width > item.positionX &&
        bullet.positionY < item.positionY + item.height &&
        bullet.height + bullet.positionY > item.positionY
      ) {
        this.player.score += 50;
        console.log(this.player.score);
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
        this.player.score += 50;
        console.log(this.player.score);
      }
    });
  }


  directWeapon(direction) {
    if (direction === "left") {
      this.player.div.style.backgroundImage =
        "url('../images/Louise-trimmy-left.png')";
      this.shootWeapon(direction);
    } else if (direction === "right") {
      this.player.div.style.backgroundImage =
        "url('../images/Louise-trimmy-right.png')";
      this.shootWeapon(direction);
    }
  }

}
