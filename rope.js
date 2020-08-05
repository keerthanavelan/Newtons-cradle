class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : body1,
            bodyB : body2,
           pointB : {x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position.x;
        var pointB = this.rope.bodyB.position.x;

        var X = pointA.x
        var Y = pointA.y

        var AX = pointB + this.offsetX
        var AY = pointB + this.offsetY
        strokeWeight(2);
        line(X,Y,AX,AY);
        
    }
}
