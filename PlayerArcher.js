class PlayerArcher
{
    constructor(x,y,w,h)
    {
        var options={
            isStatic:true
        }

        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.image = loadImage("./assets/playerArcher.png");
        World.add(world,this.body);
        Matter.Body.setAngle(this.body,-PI/2);

    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}