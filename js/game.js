const playArea = document.getElementById("container")


class Game {
  constructor() {
    this.gamerun = false;
    this.timer = 0;
    this.gamerun = false;
    this.ZombieArr = [];
  }

  createNewElement(className, Id) {
    const newElement = document.createElement("div");
    newElement.className = className;
    newElement.Id = Id;
    playArea.appendChild(newElement);
    return newElement;
  }

  drawNewElement(item) {
    item.div.style.width = item.width + "%";
    item.div.style.height = item.height + "%";
    item.div.style.left = item.positionX + "%";
    item.div.style.top = item.positionY + "%";
  }

  start() {
    this.player = new Player();
    this.player.div = this.createNewElement("player", "player");
  }

  runGame() {
    this.drawNewElement(this.player);
    this.movePlayer;
    this.slowZombie = new ZombieMark();
    this.slowZombie.div =this.createNewElement("zombieMark")
    this.drawNewElement(this.slowZombie);
    this.ZombieArr.push(this.slowZombie);
  }

  pauseGame() {
    // clearInterval(this.timer)
  }

  reloadGame() {
    document.location.reload();
  }

  movePlayer(direction) {
    if (direction === "left" && this.player.positionX > 0) {
      this.player.moveLeft();
    } else if (direction === "right" && this.player.positionX < 95) {
      this.player.moveRight();
    } else if (direction === "up" && this.player.positionY > 11) {
      this.player.moveUp();
    } else if (direction === "down" && this.player.positionY < 98) {
      this.player.moveDown();
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
