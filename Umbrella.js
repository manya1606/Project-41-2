class Umbrella{
    constructor(x,y,r){
   var options = {
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1.2	
   }
   this.x = x;
   this.y = y;
   this.r = 50;
   this.body = Bodies.circle(this.x,this.y,50,options)
   World .add (world,this.body)

   this.boy = loadImage("images/Walking Frame/walking_1.png")
}
display(){
    var pos = this.body.position
    imageMode(CENTER)
    image(this.boy,pos.x,pos.y,pos.y+70,300,300)
}
}
