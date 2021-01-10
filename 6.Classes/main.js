var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log("X: " + this.x + " Y: " + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //......
    };
    return Point;
}());
var points = new Point();
points.x = 1;
points.y = 3;
points.draw();
