class Cloud {
    constructor() {
    this.puffNumber = random( 7, 20 ) ;
    this.xSpeed = random(0.8, 1.2);
    this.size = 50;
    this.puffs = [];
    this.x = width+100;
    this.y = random(40, 300);

    // Puff Generation
    let i = 0;
    for (i = 0; i < this.puffNumber; i++) {
      // Create a puff...
      let puff = {
        //that is offset from the cloud center by half the width or one quarter of the height
        xOffset: random((this.size / 2) * -1, (this.size / 2)),
        yOffset: random((this.size / 4) * -1, (this.size / 4)),
        // And between 70 and 100% the size of the cloud origin puff
        size: this.size * random(0.7, 1)
      }
      // Push the puff into the cloud
      this.puffs.push(puff);
    }
    }

    // Method of drawing the cloud
    paint() {
    // Animate
    this.x -= this.xSpeed;
    // Draw
    noStroke();
    ellipse(this.x, this.y, this.size);

    let i = 0;
    for (i = 0; i < this.puffs.length; i++) {
      ellipse(
        this.x + this.puffs[i].xOffset,
        this.y + this.puffs[i].yOffset,
        this.puffs[i].size
      )
    }
    }
}