let computerArray=[];
let levelCounter=0;
let playerCounter=0;
let finished= false;


function resize(){
    if(window.innerWidth<900){
        document.querySelector(".title").style.height="10vh";
        document.querySelector("button").classList.remove("hidden");
        document.querySelector("h2").classList.add("hidden");
    }
    else{
        document.querySelector("button").classList.add("hidden");
        document.querySelector("h2").classList.remove("hidden");
        document.querySelector(".title").style.height="30vh";
    }
}

resize();


addEventListener("resize",resize);

function buttons(){
    switch(this.classList[1]){
        
        case "r":
            var sound = new Audio("./assets/sounds/RED.mp3");
            sound.play();
            
            document.querySelector(".r").classList.add("clicked");
            setTimeout(()=>{
                document.querySelector(".r").classList.remove("clicked");
            },150);
            checkGame("r");
            break;
        case "y":
            var sound = new Audio("./assets/sounds/YELLOW.mp3");
            sound.play();
            
            document.querySelector(".y").classList.add("clicked");
            setTimeout(()=>{
                document.querySelector(".y").classList.remove("clicked");
            },150);
            checkGame("y");
            break;
        case "g":
            var sound = new Audio("./assets/sounds/GREEN.mp3");
            sound.play();
            
            document.querySelector(".g").classList.add("clicked");
            setTimeout(()=>{
                document.querySelector(".g").classList.remove("clicked");
            },150);
            checkGame("g");
            break;
        case "b":
            var sound = new Audio("./assets/sounds/BLUE.mp3");
            sound.play();
            
            document.querySelector(".b").classList.add("clicked");
            setTimeout(()=>{
                document.querySelector(".b").classList.remove("clicked");
            },150);
            checkGame("b");
            break;


    }

}
function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 500);
    });
  }
  function resolveAfter3Seconds(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(x);
      }, 1000);
    });
  }


document.addEventListener("keypress",async function start(e){
    console.log(e);
    if(e.key===" "){
        for(var i=0;i<4;i++){
            document.querySelectorAll(".grid-item")[i].addEventListener("click",buttons);}


        levelCounter=1;
        playerCounter=0;
        finished=false;
        document.querySelector("h1").style.color="orange";
        document.querySelector("h1").textContent="LEVEL "+ levelCounter;
        document.querySelector("h2").textContent="";
        var delay= await resolveAfter2Seconds(10);
        console.log(delay); 
        computer(levelCounter);
    }


});
async function computer(level){
    for(let i=0;i<level;i++){
        let box=Math.floor(Math.random()*4);
            switch(box){
                case 0:
                    document.querySelector(".y").click();
                    computerArray.push("y");
                    break;
                case 1:
                    document.querySelector(".r").click();
                    computerArray.push("r");
                    break;
                case 2:
                    document.querySelector(".g").click();
                    computerArray.push("g");
                    break;
                case 3:
                    document.querySelector(".b").click();
                    computerArray.push("b");
                    break;
            }
        var delay= await resolveAfter2Seconds(10);
        }
        finished=true;
    }


async function checkGame(letter){
    
    if(!finished){
        return;
    }

    if(letter!=computerArray[playerCounter]){
        document.querySelector("h1").style.color="red";
        document.querySelector("h1").textContent="GAME OVER!";
        let gameOver= new Audio("./assets/sounds/GAMEOVER.mp3");
        gameOver.play();
        document.querySelector("h2").innerHTML="Click <svg xmlns='http://www.w3.org/2000/svg' height='60'viewBox='0 0 24 24' id='spacebar'><path d='M21 10c0-.6-.4-1-1-1s-1 .4-1 1v2c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-2c0-.6-.4-1-1-1s-1 .4-1 1v2c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-2z' fill='#ffa500' class='color000000 svgShape'></path></svg>  to begin";
        computerArray=[];
        levelCounter=1;
        playerCounter=0;
        finished=false;
        for(var i=0;i<4;i++){
            document.querySelectorAll(".grid-item")[i].removeEventListener("click",buttons);}
            if(window.innerWidth<1000){
                document.querySelector("button").classList.remove("clicked");
                document.querySelector("button").classList.remove("hidden");
            }
            addEventListener("resize",resize);
        
    }
    else if(playerCounter==(levelCounter-1)){
        levelCounter++;
        playerCounter=0;
        computerArray=[]
        document.querySelector("h1").textContent="LEVEL "+levelCounter;
        finished=false;
        var delay= await resolveAfter3Seconds(10);
        computer(levelCounter);
        

    }
    else{
        playerCounter++;
    }

}

document.querySelector("button").addEventListener("click",function(){
    document.querySelector("button").classList.add("clicked");
    document.querySelector("button").classList.add("hidden");
    const event = new KeyboardEvent('keypress', {
    key: ' ',
    code: 'Space',
    which: 32,
    keyCode: 32,
  });
  
   // dispatch the event on some DOM element
  document.dispatchEvent(event);
  removeEventListener("resize",resize);

})
