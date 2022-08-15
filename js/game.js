
const GAME_SIZE = 600;
const SQUARE_SIZE = 20;
const canvas = document.getElementById('game');
const ctx = canvas.getContext ('2d');
const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");

const eatSound = document.querySelector("#eatSound");
const snake = new Snake(SQUARE_SIZE);
const food = new Food();

let snakeSpeed = 150;
let score = 0;

let currentDirection = 'right';

document.body.style.zoom = "80%";

function detectKeyPressed () {
    document.addEventListener('keydown', function(event) {
        console.log(event.key);
        switch(event.key){
            case 'ArrowLeft':
                currentDirection ='left';
                break;
             case 'ArrowRight':
                currentDirection ='right';
                break;
            case 'ArrowUp':
                currentDirection ='up';
                break;
            case 'ArrowDown':
                currentDirection ='down';
                break;
        default:
                break;
        }
    });
}

function clearScreen (){
    ctx.clearRect(0,0, GAME_SIZE, GAME_SIZE);
}

function update (){
    clearScreen();
    snake.update();
    if (snake.alive) {
    setTimeout(update, snakeSpeed);
    }
        food.draw ();
    

}

function start (){
    detectKeyPressed();
    update();
    scoreText.textContent = score;
}

start();
