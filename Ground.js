class block {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.Visibility=255
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<2.2){
        push();
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
      }
      else{
      World.remove(world,this.body)
      push();
      this.Visibility-=5
      tint(255,this.Visibility)
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      pop();
      }
      }
      };