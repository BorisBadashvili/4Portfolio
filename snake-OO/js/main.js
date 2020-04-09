const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

let snake = new Snake();
let food = new Food();

let changeDirection = function(event) {

  switch (event.keyCode) {
    case 37: // left arrow
      if (!(snake.direction.x === 10)) {
        snake.direction.x = -10;
        snake.direction.y = 0;
      }
      break;
    case 38: // up arrow
      if (!(snake.direction.y === 10)) {
        snake.direction.x = 0;
        snake.direction.y = -10;
      }
      break;
    case 39: // right arrow
      if (!(snake.direction.x === -10)) {
        snake.direction.x = 10;
        snake.direction.y = 0;
      }
      break;
    case 40: // down arrow
      if (!(snake.direction.y === -10)) {
        snake.direction.x = 0;
        snake.direction.y = 10;
      }
      break;
  }
};
function clearCanvas() {
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Take a look at this.
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
}
let main = () => {
    setTimeout(function frame() {
        clearCanvas();
        food.drawFood();
        snake.drawSnake();
        snake.movement();
        main();
    }, 80);
};


document.addEventListener("keydown", changeDirection);

main();