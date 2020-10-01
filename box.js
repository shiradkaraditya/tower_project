class Box
{
  constructor(x, y, width, height, angle) 
  {
      var options = 
      {
        restitution : 0.7,
        friction : 0.6,
        isStatic : false,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
      display()
      {
        if(this.body.speed < 3)
        {
          var pos =this.body.position;
          push()
          strokeWeight(3);
          translate(pos.x ,pos.y)
          rotate(this.body.angle)
          rectMode (CENTER)
          fill("lightBlue");
          rect(0,0 ,this.width , this.height)
          pop()
        }
        else
        {
          World.remove(world, this.body);
          push();
          tint(255, this.visibility);
          this.visiblity = this.visiblity - 5;
          pop(); 
        }
    }
}