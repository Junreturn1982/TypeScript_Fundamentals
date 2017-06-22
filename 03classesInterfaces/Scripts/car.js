class Engine {
    constructor(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
}
// tsc.exe --target ES6 ./Scripts/car.ts --watch
class Car {
    constructor(engine) {
        this.engine = engine;
    }
    get engine() {
        return this._engine;
    }
    set engine(value) {
        if (value === undefined)
            throw 'Please supply an engine';
        this._engine = value;
    }
    start() {
        alert('Car engine started ' + this._engine.engineType);
    }
}
window.onload = function () {
    var engine = new Engine(300, 'V8');
    var car = new Car(engine);
    // car.engine -> properties
    alert('HorsePower = ' + car.engine.horsePower);
    // car.start() -> function
    car.start();
};
