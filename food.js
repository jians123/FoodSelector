class Food{
    constructor(_imgName){
        this.x = random(windowWidth);
        this.y = random(-2000);
        this.alpha = 255;
        this.img = loadImage(_imgName);
        this.state = 0;
        this.fallSpeed = random(1,2);
        this.rotateSpeed = random(0.005,0.01);
        this.label = "";
        this.state = 0;
    }

    setPosition(_x,_y){
        this.x = _x;
        this.y = _y;
    }

    setLabel(_s){
        this.label = _s;
    }

    draw(){
        if(this.state == 1)
        {
            push();
            translate(this.x,this.y);
            rotate(sin(this.rotateSpeed*frameCount)/6);
            image(this.img, 0, 0);
            pop();
            fill(100);
            textAlign(CENTER);
            textSize(36);
            text(this.label,this.x,this.y+110);
        }
    }
    
    fall(){
        this.y += this.fallSpeed;
        if(this.y > windowHeight + 200){
            this.y = random(-2000);
        }
    }
}