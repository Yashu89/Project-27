class Ball{

    constructor(x, y, radius){

        var options = {

            'isStatic' : false,
            'restitution' : 1,
            'friction'  : 0,
            'density' : 5
            
        }

        this.body = Bodies.circle(x, y, 30, options);
        this.radius = radius;
        World.add(world, this.body)
    }

display(){
    fill("violet")
    ellipseMode(RADIUS)
    ellipse(this.body.position.x, this.body.position.y, 30)
}

}