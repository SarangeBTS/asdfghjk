class PAPER {
    constructor(x,y,r){
        var options={
            friction:0.5,
            density:1.2,
            restitution:0.7,
          }
        
        this.body=Bodies.circle(x,y,r)
        this.radius=r
        World.add(world,this.body);

    }


    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    

    }

}