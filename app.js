  //Closes popup when x is clicked
  document.querySelector("#close").addEventListener("click", function(){
  document.querySelector(".popup").style.display = "none";
  });
  
  //https://www.w3schools.com/howto/howto_js_toggle_class.asp
  //This code helps turn my tiles to active to make the box display
  const toggleActive = a => {
    if (a.className == 'tile active') {
        a.className = 'tile';
    } else {
        a.className = 'tile active';
      }
  }; 

//hides tile once double clicked as to not repeat question
  const usedTile = document.querySelectorAll(".tile");

  usedTile.forEach(tile => {
    tile.addEventListener("dblclick", function handleClick(event){
       console.log('tile clicked', event);
       tile.setAttribute('style', 'visibility:hidden');
    });
  });


//making scoreboard counter increment
  const plus1 = document.querySelector("#plus1"),
    minus1 = document.querySelector("#minus1"),
    plus2 = document.querySelector("#plus2"),
    minus2 = document.querySelector("#minus2"),
    score1 = document.querySelector(".scoreboardScore1")
    score2 = document.querySelector(".scoreboardScore2");
    //Adding audio for scoreboard buttons
    const audio = new Audio("./assets/mixkit-unlock-game-notification-253.wav");
    const audio2 = new Audio("./assets/mixkit-arcade-retro-changing-tab-206.wav");

let a = 0;
plus1.addEventListener("click", () => {
    audio.play();
    a+= 100;
    score1.innerText = a;
    console.log(a);
});

minus1.addEventListener("click", () => {
  audio2.play();
    a-= 100;
    score1.innerText = a;
    console.log(a);
});

let b = 0;
plus2.addEventListener("click", () => {
    audio.play();
    b+= 100;
    score2.innerText = b;
    console.log(b);
});

minus2.addEventListener("click", () => {
    audio2.play();
    b-= 100;
    score2.innerText = b;
    console.log(b);
});

//End Game function
const x = document.getElementsByClassName(".scoreboardScore1");
function gameOver() {
  if(x > 1000)
    console.log("Game Over!");
}
gameOver();





 