window.onload = () => {
  const startElement = document.getElementById("start");
  let gameState = 0;
  const boundaries = document.getElementsByClassName("boundary");
  const endElement = document.getElementById("end");
  const statusH2 = document.getElementById("status");
  const game = document.getElementById("game");
  function losing() {
    if (gameState == 1) {
      for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].style.backgroundColor = "#ff8888";
      }
      statusH2.innerHTML = "You Lose!";
      gameState = 0;
    }
  }
  function winning() {
    if (gameState == 1) {
      statusH2.innerHTML = "You Win!";
      gameState = 0;
    }
  }
  function preventCheating(){
    if(gameState == 1){
        for (let i = 0; i < boundaries.length; i++) {
            boundaries[i].style.backgroundColor = "#ff8888";
          }
          statusH2.innerHTML = "The game is restarted without affecting your score!";
          gameState = 0;
        }

    }

  
  game.addEventListener("mouseleave", ()=> preventCheating())
  startElement.addEventListener("mouseenter", () => {
    if (gameState == 0) {
      gameState = 1;
      for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].style.backgroundColor = "#eeeeee";
      }
      statusH2.innerHTML = "Reach The end without touching the walls!";
      console.log(gameState);
      for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseenter", () => losing());
      }
      endElement.addEventListener("mouseenter", () => winning());
    }
  });
  startElement.addEventListener("click", () => {
    location.reload();
  });
};
