const game = new Game();

game.start();

console.log(game.gamerun);

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowRight":
      game.movePlayer("right");
      break;
    case "ArrowLeft":
      game.movePlayer("left");
      break;
    case "ArrowUp":
      game.movePlayer("up");
      break;
    case "ArrowDown":
      game.movePlayer("down");
      break;
    case "s":
     if (game.gamerun === false) {
       game.gamerun = true;
       game.runGame();
     } else if (game.gamerun === true) {
       game.gamerun = false;
       console.log(game.gamerun);
       game.pauseGame();
     }
     break;
   case "r":
    game.reloadGame();
    case "a":
      game.directWeapon("left");
      break;
    case "d":
      game.directWeapon("right");
      break;
  }
});

function addHealthBar(){
    let healthBar = document.createElement("progress");
    healthBar.id = 'healthBar';
    healthBar.max = '100';
    healthBar.value = '100';
    playArea.appendChild(healthBar)
}

function deductHealth(){
document.getElementById("healthBar").value -=10
}

