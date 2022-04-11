class Game {
    constructor(){
        this.playArea = null;
        this.player = null;
        this.gamerun = false;
        this.timer = 0;
    }

    start(){      
      this.player = new Player()
      this.player.domElement = this.createNewElement("player", "player")
     
    }

  

    createNewElement(className, Id){
        const playArea = document.getElementById("container");
        let newElement = document.createElement("div");
        newElement.className = className;
        playArea.appendChild(newElement);
        console.log(newElement);
        return newElement;            
    }

    drawNewElement(item){
        item.domElement.style.top = item.positionY + "%"
        item.domElement.style.left = item.positionX + "%"
        item.domElement.style.width = item.width + "%"
        item.domElement.style.height = item.height + "%"

    }

    runGame(){
        this.drawNewElement(this.player)
        this.movePlayer
        // this.timer = setInterval(() => {
            
        // },100)
    
    }

    pauseGame(){
        // clearInterval(this.timer)
    }

    reloadGame(){
        document.location.reload()
    }

    movePlayer(direction){
        if (direction === "left" && this.player.positionX > 0) {
            this.player.moveLeft();
          } else if (direction === "right" && this.player.positionX < 95) {
            this.player.moveRight();
          } else if (direction === "up" && this.player.positionY > 11) {
              console.log(this.player.positionY)
            this.player.moveUp();
          } else if (direction === "down" && this.player.positionY < 98) {
            this.player.moveDown();
            console.log(this.player.positionY)
          }
          this.drawNewElement(this.player);
       }

    shootWeapon(direction){
        if (direction === "left") {
            this.player.domElement.style.backgroundImage="url('../images/Louise-trimmy-left.png')"
          } else if (direction === "right") {
            this.player.domElement.style.backgroundImage="url('../images/Louise-trimmy-right.png')"
       }
    }   
}






