class Triangle{
    constructor(x1, y1, x2, y2, x3, y3){

    this.body = Bodies.rectangle(x1,y1,x2,y2,x3,y3);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    World.add(world,this.body);
    }
    display(){
        fill(91,13,45);
        strokeWeight(2);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }
}