interface IRectangle {
    height: number;
    width: number;
    getArea(): number;
}

namespace Shape {
    export class Rectangle implements IRectangle {
        constructor(
            public height: number,
            public width: number
        ) {}
        getArea() {
            return this.height * this.width;
        }
    }
}
namespace hoangShape {
    function run() {
        let rect = new Shape.Rectangle(10, 20);
        let area = rect.getArea();
        console.log(area);
    }
    run();
}

