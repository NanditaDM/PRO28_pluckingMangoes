class stoneLauncher {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04
        }
        this.pointB = pointB;
        this.launcher = create.Constraint(options);
        World.add(world, this.launcher);
        //this.boyImage = loadImage ("Plucking mangoes/boy.png");
    }

    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        //image(this.boyImage,200,700,40,100);

        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;

            stroke(49,23,8);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}