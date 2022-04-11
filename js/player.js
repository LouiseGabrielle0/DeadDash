class Player{
    constructor(){
    this.domElement = null;
    this.height = 14;
    this.width = 5;
    this.positionX = 50;
    this.positionY = 50;
    }


moveLeft(){
    this.positionX--
}

moveRight(){
    this.positionX++
}

moveDown(){
    this.positionY++
}

moveUp(){
    this.positionY--
}

}