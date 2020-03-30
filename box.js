class Box{
    constructor(x,y,width,height){
    var  box_options={
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
     }
    
    this.body1= Bodies.rectangle(x,y,width,height,box_options);
    World.add(world,this.body1);
    this.width = width;
    this.height = height;
    }


display(){
    rectMode(CENTER);
    rect(this.body1.position.x,this.body1.position.y,this.width,this.height);
}
};