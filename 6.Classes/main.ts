
class Point{ 
    x: number;
    y: number;
    draw() {
        console.log("X: " + this.x + " Y: " + this.y)
    } 
}

let points = new Point();
points.x = 1
points.y = 3

points.draw();

