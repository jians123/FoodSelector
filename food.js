class Food{
    constructor(_imgName){
        this.x = 0;
        this.y = 0;
        this.alpha = 255;
        this.img = loadImage(_imgName);
        this.state = 0;
    }

    draw(x,y){
        image(this.img, x, y);
    }

    update(){

    }
}