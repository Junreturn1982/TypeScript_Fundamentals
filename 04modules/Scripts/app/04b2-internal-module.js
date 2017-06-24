var Shape;
(function (Shape) {
    class Rectangle {
        constructor(height, width) {
            this.height = height;
            this.width = width;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    Shape.Rectangle = Rectangle;
})(Shape || (Shape = {}));
var hoangShape;
(function (hoangShape) {
    function run() {
        let rect = new Shape.Rectangle(10, 20);
        let area = rect.getArea();
        console.log(area);
    }
    run();
})(hoangShape || (hoangShape = {}));
