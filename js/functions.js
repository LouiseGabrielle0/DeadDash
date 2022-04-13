const game = new Game();

game.start();

console.log(game.gamerun);

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case "ArrowRight":
      player.movePlayer("right");
      break;
    case "ArrowLeft":
      player.movePlayer("left");
      break;
    case "ArrowUp":
      player.movePlayer("up");
      break;
    case "ArrowDown":
      player.movePlayer("down");
      break;
    case " ":
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
      weapon.directWeapon("left");
      break;
    case "d":
      weapon.directWeapon("right");
      break;
  }
});

function addHealthBar() {
  let healthBar = document.createElement("progress");
  healthBar.id = "healthBar";
  healthBar.max = "100";
  healthBar.value = "100";
  playArea.appendChild(healthBar);
}

function deductHealth() {
  document.getElementById("healthBar").value -= 10;
}

function increaseHealth(item){
  switch (item) {
    case "water":
  document.getElementById("healthBar").value += 20;
    break;
    case "medkit":
  document.getElementById("healthBar").value += 50    
}
}

function displayScore(){
  let score = player.score;
  document.getElementById("score").textContent = score;
}

function wait(ms){
  let start = new Date().getTime();
  let end = start
  while (end < start + ms){
    end = new Date().getTime();
  }
}
