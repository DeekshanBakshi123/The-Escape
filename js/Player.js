class Player {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 125, 125, options);
        this.width = width;
        this.height = height;
        
        this.image = loadAnimation("ss.png","nn.png","vv.png" ,"sprite/ff.png","sprite/hh.png","vv.png" );
        World.add(world, this.body);
      }
  
      display(){
        push();
        var angle = this.body.angle;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
       
        if(keyDown('RIGHT_ARROW') ){
            this.body.position.x += 20;
        }

        if(keyDown('UP_ARROW') && this.body.position.y > 430){
            this.body.position.y -= 15;
        } else if (this.body.position.y < height-180 ){
            this.body.position.y += 15;
        }
       
        animation(this.image, 0, 0, this.width, this.height);
        pop();
      }
  }
  