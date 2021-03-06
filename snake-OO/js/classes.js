class Snake {
  constructor() {
    this.images = {
      head: document.querySelector("#head"),
      head2: document.querySelector("#head2"),
      body: document.querySelector("#body"),
      tail: document.querySelector("#tail"),
    };

    this.coordinates = [{ x: 140, y: 120, part: this.images.head }];
    this.direction = { x: 10, y: 0 };
    this.size = 25;
  }
  movement() {
    let head = {
      x: this.coordinates[0].x + this.direction.x,
      y: this.coordinates[0].y + this.direction.y,
    };
    this.coordinates.unshift(head);

    const didEatFood =
      this.coordinates[0].x === food.coordinates.x &&
      this.coordinates[0].y === food.coordinates.y;

    if (didEatFood) {
      document.querySelector(".score").innerHTML = "worked!";
      food.createFood();
    } else {
      this.coordinates.pop();
    }
  }
  drawSnake() {
    for (let i = 0; i < this.coordinates.length; i++) {
      if (this.coordinates[0] == this.coordinates[i]) {
        ctx.drawImage(
          this.images.head,
          this.coordinates[0].x,
          this.coordinates[0].y,
          this.size,
          this.size
        );
      }
      for (let k = 1; k < this.coordinates.length; k++) {
        ctx.drawImage(
          this.images.body,
          this.coordinates[k].x,
          this.coordinates[k].y,
          this.size,
          this.size
        );
      }
      if (this.coordinates.length == i - 1) {
        ctx.drawImage(
          this.images.tail,
          this.coordinates[k].x,
          this.coordinates[k].y,
          this.size,
          this.size
        );
      }
    }
  }
}

class Food {
  constructor() {
    this.coordinates = {
      x: this.randomFood(0, canvas.width - 25),
      y: this.randomFood(0, canvas.width - 25),
    };
    this.size = 25;
  }
  randomFood(min, max) {
    return Math.round((Math.random() * (max - min) + min) / 10) * 10;
  }
  createFood() {
    this.coordinates.x = this.randomFood(0, canvas.width - 25);
    this.coordinates.y = this.randomFood(0, canvas.width - 25);

    snake.coordinates.forEach((coordinate) => {
      const foodIsOnSnake =
        coordinate.x === this.foodX && coordinate.y == this.foodY;

      if (foodIsOnSnake) {
        this.coordinates.x = this.randomFood(0, canvas.width - 10);
        this.coordinates.y = this.randomFood(0, canvas.width - 10);

        this.createFood();
      }
    });
  }
  drawFood() {
    ctx.fillStyle = "green";

    ctx.fillRect(this.coordinates.x, this.coordinates.y, this.size, this.size);
    ctx.strokeRect(
      this.coordinates.x,
      this.coordinates.y,
      this.size,
      this.size
    );
  }
}
