class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);

        this.slingIMG1 = loadImage("sprites/sling1.png");
        this.slingIMG2 = loadImage("sprites/sling2.png");
        this.slingIMG3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image(this.slingIMG1,200,30);
        image(this.slingIMG2,170,30)
        
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(8);
            stroke(48, 22, 8);

            if(pointA.x<220){
                line(pointA.x-20, pointA.y+10, pointB.x-20, pointB.y+10);
                line(pointA.x-20, pointA.y+10, pointB.x+20, pointB.y+10);
                image(this.slingIMG3,pointA.x-20, pointA.y+10)
            } 
            else{
                line(pointA.x+20, pointA.y+10, pointB.x-20, pointB.y+10);
                line(pointA.x+20, pointA.y+10, pointB.x+20, pointB.y+10);
            }

            
        }
    }
    
}