class Sling {
    constructor (bodyA,pointB) {
       
        var options ={
          
           bodyA: bodyA, 
           pointB: pointB,
            length:20,
            stiffness: 0.4
         }
        this.sling = Constraint.create(options);
      
        World.add(world, this.sling);
    }
    display() {

    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB
    line(pointA.x, pointA.y, pointB.x, pointB.y);
  
}

}

