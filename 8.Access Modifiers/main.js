var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + " Y: " + this.y);
    };
    return Point;
}());
var points = new Point(1, 2);
points.draw();
