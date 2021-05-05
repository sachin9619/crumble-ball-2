class Paper{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            'restitution':0.5,
           'friction':0.3,
           'density':0.5
        }
        this.x=x;
        this.y=y;
        this.image=loadImage("paper.png")
        this.r=radius;
        this.body=Bodies.circle(this.x,this.y,this.r,options);
       
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        push();
        translate(pos.x,pos.y);
       imageMode(CENTER);

        

        image(this.image,0,0,this.r,this.r);
        pop();

    }
};