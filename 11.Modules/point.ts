

export class Point{ 
    constructor(public x?:number, private y?:number) {  //? - optional
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log("X: " + this.x + " Y: " + this.y)
    } 
}
