class Cloud {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speed = 0.6;
      this.offset1 = random(x, y);
      this.offset2 = random(x, y);
    }

  move() {
    this.x += this.speed
    this.y += 0.1
    if (this.x > width) {
      this.x = 0;
      this.y = height/3;
    } 
    else if (this.x < 0) {
      this.x = width;
      this.y = height/3;
    }
  }

  display() {
    noStroke();
    fill(255);
    ellipse(this.x, this.y, this.size);
    }
  }