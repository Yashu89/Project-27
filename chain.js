
class Chain {

    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var yo = {
            bodyA : body1,
            bodyB : body2,
            pointB: {
                x:this.offsetX, y:this.offsetY
            }
        }
        this.chain = Matter.Constraint.create(yo)
        World.add(world, this.chain)
       

    }

display(){
    var point1 = this.chain.bodyA.position
    var point2 = this.chain.bodyB.position

    var Anchor1X = point1.x
    var Anchor1Y = point1.y

    var Anchor2X = point2.x + this.offsetX
    var Anchor2Y = point2.y + this.offsetY

    line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y)

}



}
