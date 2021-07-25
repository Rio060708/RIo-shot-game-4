class Arrow extends BaseClass {
  
    constructor(x,y){
      var options = {
        'restitution':2.2,
        'friction':0.4,
        'density':4,
        'isStatic':true
    }
      super(x,y,50,50,options);
      this.image = loadImage("sprites/arrowBG.png");
      this.smokeImage = loadImage("sprites/smoke.png");
      this.trajectory =[];
    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
  
      super.display();
  
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
     
  
      for(var i=0; i<this.trajectory.length; i++){
        image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      }
    }
  }
  