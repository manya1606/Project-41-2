class Drops{
    constructor(x,y,r){
   var options = {
       isStatic:false,
       restitution:0.3,
       friction:0.1,
       density:1.2	
   }
   this.x = x;
   this.y = y;
   this.r = 5;
   this.body = Bodies.circle(this.x,this.y,5,options)
   World .add (world,this.body)

}
display(){
    var pos = this.body.position 
    push ()
    translate (pos.x, pos.y)
    ellipseMode (CENTER)
    strokeWeight (3)
    fill (255,0,255)
    ellipse (0,0,this.r,this.r)
    pop ()
}

update() {
    if(this.body.position.y > height){

        Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
    }
}
}