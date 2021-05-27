const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World

var maxDrops = 100;

var drops = []

var rand
var thunderFrameCount = 0;
var thunder

function preload(){
    thunderbolt1 = loadImage("images/thunderbolt/1.png")
    thunderbolt2 = loadImage("images/thunderbolt/2.png")
    thunderbolt3 = loadImage("images/thunderbolt/3.png")
    thunderbolt4 = loadImage("images/thunderbolt/4.png")

    walking1 = loadImage("images/Walking Frame/walking_1.png")
    walking2 = loadImage("images/Walking Frame/walking_2.png")
    walking3 = loadImage("images/Walking Frame/walking_3.png")
    walking4 = loadImage("images/Walking Frame/walking_4.png")
    walking5 = loadImage("images/Walking Frame/walking_5.png")
    walking6 = loadImage("images/Walking Frame/walking_6.png")
    walking7 = loadImage("images/Walking Frame/walking_7.png")
    walking8 = loadImage("images/Walking Frame/walking_8.png")
}

function setup(){
    engine=Engine.create()
    world=engine.world

    createCanvas(600,700);

    umbrella = new Umbrella (200,500)

    ground = Bodies.rectangle(0,690,600,10,{isStatic: true})
    World.add(world, ground)

    if(frameCount%150 === 0){
        for (var i=0; i<maxDrops; i++){
            drops.push(new Drops(random(0,400), random(0,400)));
        }
    }
    
}

function draw(){
    Engine.update(engine)

    background(0)

    rand = Math.round(random(1,4))

    if (frameCount%80 === 0){
        thunderFrameCount = frameCount
        
        thunder = createSprite(random(10,370),random(10,30),10,10)

        switch(rand){
            case 1: thunder.addImage(thunderbolt1)
            break;

            case 2: thunder.addImage(thunderbolt2)
            break;

            case 3: thunder.addImage(thunderbolt3)
            break;

            case 4: thunder.addImage(thunderbolt4)
            break;

            default:break
        }
        thunder.scale = random(0.3,0.6)

    }
    if (thunderFrameCount+10 === frameCount && thunder){
        thunder.destroy()
    }

    umbrella.display()
    for (var i=0; i<maxDrops; i++){
        drops[i].display()
        drops[i].update()
    }
    
    rect(ground.position.x, ground.position.y, 600, 10)

drawSprites()
    
}   

