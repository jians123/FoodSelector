class Food{
    constructor(_imgName){
        this.x = random(windowWidth);
        this.y = random(-2000);
        this.alpha = 255;
        this.img = loadImage(_imgName);
        this.state = 0;
        this.fallSpeed = random(1,2);
        this.rotateSpeed = random(0.005,0.01);
    }

    draw(){
        push();
        translate(this.x,this.y);
        rotate(sin(this.rotateSpeed*frameCount)/2);
        image(this.img, 0, 0);
        pop();
    }

    fall(){
        this.y += this.fallSpeed;
        if(this.y > windowHeight + 200){
            this.y = random(-2000);
        }
    }
}
