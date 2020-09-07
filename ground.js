class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          density: 1.3
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(color){
      rectMode(CENTER);
      fill(34,108,2);
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
  };