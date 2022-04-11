const game = new Game();
game.start();

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowRight":
      game.movePlayer("right");
      game.shootWeapon("right")
      break;
    case "ArrowLeft":
      game.movePlayer("left");
      game.shootWeapon("left")
      break;
    case "ArrowUp":
      game.movePlayer("up");
      break;
    case "ArrowDown":
      game.movePlayer("down");
      break;
    case "a":
        game.shootWeapon("left");
        break;
    case "d":
        game.shootWeapon("right");
        break;

  }
});
