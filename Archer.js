
class Player{
  constructor(x, y, width, height, angle,type) {
      var options = {
          'restitution':0,
          'friction':4.0,
          'density':2,
          'isStatic' : true
      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      // this.image = loadImage("sprites/base.png");
     
      if (type===1){
        this.image = loadImage("sprites/Archer.png");
      }
      if(type === 2){
          this.image = loadImage("sprites/Shooting.png")
      }
     
      World.add(world, this.body);
      
      
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }

 
}