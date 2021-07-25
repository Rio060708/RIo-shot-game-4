class Monster extends BaseClass {
  constructor(x, y, width, height,type){
    super(x,y,width,height);
    if(type===1){
      this.image = loadImage("sprites/Monster1.png");
    }
    if(type===2){
      this.image = loadImage("sprites/Monster2.png");
    }
    if(type===6){
     this.image = loadImage("sprites/BossMonster.png");
  
    }
  }

};
