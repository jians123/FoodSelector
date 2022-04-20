class Egg{
    constructor(_imgName){
        this.x = 0;
        this.y = 0;
        this.alpha = 255;
        this.img = loadImage(_imgName);
        this.state = 0;
        this.rotateSpeed = 0.01;
        this.label = "";
    }

    setPosition(_x,_y){
        this.x = _x;
        this.y = _y;
    }

    setLabel(_s){
        this.label = _s;
    }

    draw(){
        if(state != 2)
        {
            push();
            translate(this.x,this.y);
            rotate(sin(this.rotateSpeed*frameCount)/6);
            if(this.state == 0)
                image(this.img, 0, 0,this.img.width,this.img.height);
            else if(this.state == 1){
                image(this.img, 0, 0,this.img.width*1.2,this.img.height*1.2);
            }
            pop();
        }
        fill(100);
        textAlign(CENTER);
        textSize(46);
        text(this.label,this.x,this.y+160);
    }

    update(){
        if(this.state != 2)
        {
            if(dist(this.x, this.y, mouseX, mouseY) < 100)
            {
                this.state = 1;
            }
            else
            {
                this.state = 0;
            }
        }
       
    }
}