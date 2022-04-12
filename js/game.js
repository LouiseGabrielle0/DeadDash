const playArea = document.getElementById("container");

class Game {
  constructor() {
    this.gamerun = false;
    this.timer = null;
    this.time = 0;
    this.zombieArr = [];
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
  }

  runGame() {
    let slowZombie = new ZombieMark();
    slowZombie.div = this.createNewElement("zombieMark");

    this.timer = setInterval(() => {
      this.zombieArr.forEach((zombie) => {
        zombie.moveZombieRight();
        this.drawNewElement(zombie);
        zombie.deleteZombieMark(zombie);
      });

      if (this.time % 5 === 0) {
        let slowZombie = new ZombieMark();
        slowZombie.div = this.createNewElement("zombieMark");
        this.drawNewElement(slowZombie);
        this.zombieArr.push(slowZombie);
      }

      this.time++;
    }, 1000);
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
      console.log(this.player.positionX);
      this.player.moveRight();
    } else if (direction === "up" && this.player.positionY < 50) {
      console.log(this.player.positionY);
      this.player.moveUp();
      console.log(this.player.positionY);
    } else if (direction === "down" && this.player.positionY > 0) {
      this.player.moveDown();
      console.log(this.player.positionY);
    }
    this.drawNewElement(this.player);
  }

  shootWeapon(direction) {
    if (direction === "left") {
      this.player.div.style.backgroundImage =
        "url('../images/Louise-trimmy-left.png')";
    } else if (direction === "right") {
      this.player.div.style.backgroundImage =
        "url('../images/Louise-trimmy-right.png')";
    }
  }
}
