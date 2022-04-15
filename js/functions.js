const pew = new Audio('../audio/pew.wav')




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
        game.pauseGame();
      }
      break;
    case "r":
    case "R":  
      game.reloadGame();
    case "a":
    case "A":
      weapon.directWeapon("left");
      break;
    case "d":
    case "D":
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

function makePew(){
  pew.play()
}


// When I  try to add music using getElementById - it stops the rest of the script grabing elements 

  let startGameAudio = document.getElementById("startGameAudio");
  let gameOverAudio = document.getElementById("gameOverAudio");
  let getReadyAudio = document.getElementById("getReadyAudio");
  let shootAudio = document.getElementById("shootAudio");
  
function playGetReadyAudio(){
  getReadyAudio.play();
}

  function playGameOver(){
    gameOverAudio.play()
  }

  function playGameAudio(){
    getReadyAudio.pause()
    startGameAudio.play()
  }

  function pauseGameAudio(){
    startGameAudio.pause()
    getReadyAudio.pause()
  }

  function playShootAudio(){
    shootAudio.play()
  }
