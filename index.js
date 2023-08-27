

let score=document.querySelector('.score');
let gameStart=document.querySelector('.gameStart');
let gameArea=document.querySelector('.gameArea');
let heading=document.querySelector('.heading');
let players={}

heading.addEventListener('click',function(){
    players.start = true;
    gameplay();
});
let Position = {
    left:false,
    right:false,
    top:false,
    bottom:false
}

window.addEventListener('keydown', function(event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    console.log(key)
    if(key=="ArrowRight"){
        Position.right = true
    }
    else if(key=="ArrowLeft"){
        Position.left = true
    }
    else if(key=="ArrowUp"){
        Position.right = true
    }
    else{
        Position.bottom = true
    }
})
window.addEventListener('keyup', function(event) {
    const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
    console.log(key)
    if(key=="ArrowRight"){
        Position.right = false
    }
    else if(key=="ArrowLeft"){
        Position.left = false;
    }
    else if(key=="ArrowUp"){
        Position.right = false
    }
    else{
        Position.bottom = false
    }
});

function gameplay(){
   if(players.start){
gameArea.classList.remove("hide");
gameStart.classList.add("hide");
let car=document.createElement('div');
car.className = 'Car';
car.style.background = 'red';
car.style.position = 'absolute';
car.style.width='60px';
car.style.height='60px';
car.style.top = '500px';
car.style.left = '20px';
// let rect = car.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);

// console.log(rect);
gameArea.appendChild(car);
GameStart();
players.x = car.offsetLeft;
players.y = car.offsetTop;
console.log("Player left" + players.x)
if(Position.left){
    car.style.
}
else if(Position.right){
    players.x +=5;
}
else if(Position.top){
    players.y -=5
}
else{
   players.y +=5
}

// car.innerHTML = 'kdkndkkdj'

   }
}

function GameStart(){
   console.log(gameArea);
//    gameArea.style.background='#494F55'
    
}

function ChangePosition(car){
   
}
