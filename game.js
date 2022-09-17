window.onload = () => {
  const startElement = document.getElementById("start");
  let gameState = 0;
  const boundaries = document.getElementsByClassName("boundary");

  const statusH2 = document.getElementById("status");
  function losing() {
    for (let i = 0; i < boundaries.length; i++) {
      boundaries[i].style.backgroundColor = "red";
    }
    statusH2.innerHTML = "You Lose!";
    gameState = 0;
    
  }
  startElement.addEventListener("mouseenter", () => {
    if (gameState == 0) {
      gameState = 1;
      console.log(gameState);
      for (let i = 0; i < boundaries.length; i++) {
        boundaries[i].addEventListener("mouseenter", () => {
          if (gameState == 1) {
            losing();
            console.log(gameState);
          }
        });
      }
    }
  });
  startElement.addEventListener("click" , () =>{
    location.reload();
  })
};
