class Point{ 
    constructor(public x?:number, private y?:number) {  //? - optional
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("X: " + this.x + " Y: " + this.y)
    } 

    getX() { // to access the all private member in class
        return this.x;
    }
    setX(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0')
        
        this.x = value;
    }
}

let points = new Point(1, 2);
let x = points.draw();
points.getX();
points.setX(10);
console.log(x)
