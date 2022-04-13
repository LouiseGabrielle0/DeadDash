const playArea = document.getElementById("container");
const weapon = new Weapon();
const zombie = new Zombie();
const pickUp = new PickUp();

class Game {
  constructor() {
    this.gamerun = false;
    this.timer = null;
    this.time = 0;
    this.zombieArr = []; // change to zombieRightArr
    this.zombieFasterArr = []; // change to zombieLeftArr
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
    displayScore();
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
        weapon.detectBulletCollisionLeft(zombie);
        weapon.detectBulletCollisionRight(zombie);
      });

      if (this.time % 50 === 0) {
        let slowZombie = new ZombieMark();
        slowZombie.div = this.createNewElement("zombieMark");
        this.drawNewElement(slowZombie);
        this.zombieArr.push(slowZombie);
      }

      if (this.time % 200 === 0) {
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
        weapon.detectBulletCollisionLeft(zombie);
        weapon.detectBulletCollisionRight(zombie);
      });

      weapon.bulletLeftArr.forEach((bullet) => {
        bullet.moveLeft();
        this.drawNewElement(bullet);
        weapon.deleteBulletLeft(bullet);
      });

      weapon.bulletRightArr.forEach((bullet) => {
        bullet.moveRight();
        this.drawNewElement(bullet);
        weapon.deleteBulletRight(bullet);
      });

      if (this.time % 200 === 0) {
        let water = new Water();
        water.div = this.createNewElement("water")
        this.drawNewElement(water)
        pickUp.waterArr.push(water);
      }

      pickUp.waterArr.forEach((water) => {
        pickUp.detectPickUpCollection(water)
      })

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

  gameOver() {
    alert("Game Over");
    document.location.reload();
    clearInterval(this.timer);
    return;
  }


}
