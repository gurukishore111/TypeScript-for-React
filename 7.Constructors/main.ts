class Point{ 
    x: number;
    y: number;

    constructor(x?:number,y?:number) {  //? - optional
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("X: " + this.x + " Y: " + this.y)
    } 
}

let points = new Point(1,2);

points.draw();

