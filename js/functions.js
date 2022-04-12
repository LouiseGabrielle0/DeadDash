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
      game.shootWeapon("left");
      break;
    case "d":
      game.shootWeapon("right");
      break;
  }
});


