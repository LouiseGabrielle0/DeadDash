class Game {
    constructor(){
        this.playArea = null;
        this.player = null;
    }

    start(){      
      this.player = new Player()
      this.player.domElement = this.createNewElement("player")
      this.drawNewElement(this.player)
      this.movePlayer
    }

    createNewElement(className){
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
}






