class SideWall{
    constructor(x,y,width,height){
    var  sideWall_options={
        isStatic: true
    }
    this.body1= Bodies.rectangle(x,y,width,height,sideWall_options);
    World.add(world,this.body1);
    this.width = width;
    this.height = height;
}


display(){
    rectMode(CENTER);
    rect(this.body1.position.x,this.body1.position.y,this.width,this.height);
}
};