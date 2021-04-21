class Paper {
    constructor(x, y, r) {
      var options = {
        isStatic: false,
        'density':1.2,
        'friction': 0,
        'restitution':0.3
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.x= x;
      this.y= y;
      this.r= r
      this.image= loadImage("paper.png");
      this.body= Bodies.circle(this.x, this.y,(this.r - 20)/2, options)
      World.add(world, this.body);


    };
    display(){
      var pos = this.body.position;
     // pos.x = mouseX;
      //pos.y = mouseY;
      //var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      //strokeWeight(3);
      //stroke('white')
      fill(255, 0, 255)
      imageMode(CENTER)
      image(this.image, 0, 0, this.r, this.r);
      pop();
    };
  };