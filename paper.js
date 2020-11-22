class Paper {
    constructor(x, y, radius, options) {
        var options = {
           isStatic: false,
           restitution :0.3,
           friction : 0.5,
           density :1.2,

        }
        this.body = Matter.bodies.ellipse(x, y, radius, options);
       
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("red");
        ellipse(pos.x, pos.y, pos.radius,options);
        
      }
}