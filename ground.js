class GROUND {
    constructor(){
        var options={
            friction:1,
            density:1,
            isStatic:true

          }
        this.body=Bodies.rectangle(400,680,800,40,options);
        this.width=800;
        this.height=40;
        
        World.add(world,this.body);

    }


    display(){
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    

    }

}