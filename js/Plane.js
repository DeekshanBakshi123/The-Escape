class Plane {
    constructor(x, y ,) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 10, 10 ,options);
        this.width = 100;
        this.height = 100;
        this.image = loadAnimation("planed1.png","planed2.png","planed3.png","planed4.png","planed5.png","planed6.png","planed7.png","planed8.png","planed9.png","planed10.png");
        World.add(world, this.body);
      }
  
      display(){

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image.scale = 0.1;
        animation(this.image, 0,0);  
        pop();
      }
  }
  