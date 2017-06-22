var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
// tsc.exe --target ES6 ./Scripts/car.ts --watch
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value === undefined)
                throw 'Please supply an engine';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        alert('Car engine started ' + this._engine.engineType);
    };
    return Car;
}());
window.onload = function () {
    var engine = new Engine(300, 'V8');
    var car = new Car(engine);
    // car.engine -> properties
    alert('HorsePower = ' + car.engine.horsePower);
    // car.start() -> function
    car.start();
};
